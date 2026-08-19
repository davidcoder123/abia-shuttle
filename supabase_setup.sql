-- 1. Create a table for public profiles
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text,
  phone text,
  first_name text,
  last_name text,
  date_of_birth text,
  gender text,
  balance numeric default 0.00,

  primary key (id),
  constraint unique_phone unique(phone)
);

-- 2. Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- 3. Create a policy that allows users to read their own profile
create policy "Public profiles are viewable by owner."
  on profiles for select
  using ( auth.uid() = id );

-- 4. Create a function to automatically create a profile when a new user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, phone, first_name, last_name, date_of_birth, gender, balance)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'phone',
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'date_of_birth',
    new.raw_user_meta_data->>'gender',
    0.00
  );
  return new;
end;
$$;

-- 5. Create a trigger that calls the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 6. Create a secure function to allow our Login page to look up an email by phone number
-- This function runs with "security definer" so it bypasses RLS just for this specific lookup.
create or replace function public.get_email_by_phone(p_phone text)
returns text
language plpgsql
security definer set search_path = public
as $$
declare
  v_email text;
begin
  select email into v_email from public.profiles where phone = p_phone limit 1;
  return v_email;
end;
$$;


-- 7. Create a table for dynamic routes
create table public.routes (
  id uuid default gen_random_uuid() primary key,
  origin text not null,
  destination text not null,
  departure_time text not null,
  departure_date text not null,
  frequency text default 'Daily',
  bus_assigned_id text,
  bus_assigned_name text,
  price_per_seat numeric not null,
  total_capacity integer not null,
  seats_booked integer default 0,
  stops integer default 0,
  km integer default 0,
  duration text default '',
  status text default 'Scheduled',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 8. Enable RLS on routes table
alter table public.routes enable row level security;

-- 9. Allow everyone to read the routes (public access)
create policy "Routes are viewable by everyone."
  on public.routes for select
  using ( true );

-- 10. Allow authenticated users to insert, update, and delete routes (admin access)
create policy "Routes can be managed by authenticated users."
  on public.routes for all
  using ( auth.role() = 'authenticated' )
  with check ( auth.role() = 'authenticated' );
