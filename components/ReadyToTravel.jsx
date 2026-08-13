import readyToTravelArt from "../src/assets/Group 87.png";

function StoreBadge({ href, iconSrc, iconAlt, eyebrow, label }) {
  return (
    <a
      href={href}
      aria-label={`${eyebrow} ${label}`}
      className="flex h-10 items-center gap-2 rounded-lg bg-black px-3 text-white transition-colors hover:bg-gray-900 sm:h-11 sm:gap-2.5 sm:px-3.5"
    >
      <img src={iconSrc} alt={iconAlt} className="h-5 w-5 object-contain" />
      <span className="leading-none">
        <span className="block text-[8px] leading-tight text-white/80 sm:text-[9px]">
          {eyebrow}
        </span>
        <span className="block text-sm font-semibold leading-tight sm:text-base">
          {label}
        </span>
      </span>
    </a>
  );
}

export default function ReadyToTravel() {
  return (
    <section className="bg-orange-50 px-3 py-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#ff5a00] px-5 py-5 sm:px-8 md:px-10 md:py-5">
        <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_24rem] lg:grid-cols-[minmax(0,1fr)_30rem]">
          <div className="text-white">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Ready to travel smarter?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/95 sm:text-base">
              Join thousands of smart commuters using ABIA GREEN SHUTTLE.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <StoreBadge
                href="#"
                iconSrc="/playstoreLogo.png"
                iconAlt=""
                eyebrow="GET IT ON"
                label="Google Play"
              />
              <StoreBadge
                href="#"
                iconSrc="/Vector.png"
                iconAlt=""
                eyebrow="Download on the"
                label="App Store"
              />
            </div>
          </div>

          <div className="relative h-28 overflow-hidden sm:h-34 md:h-32">
            <img
              src={readyToTravelArt}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3.5 -right-26 h-36 w-auto max-w-none select-none sm:-right-22 sm:h-44 md:-right-32 md:h-40 lg:-right-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
