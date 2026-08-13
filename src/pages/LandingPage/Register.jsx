import React from "react";
import { UserRound, Mail, Phone, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Enter a valid email"),
    gender: z.string().min(1, "Please select your gender"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    phone: z
      .string()
      .length(11, "Phone number must be exactly 11 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.boolean().refine((value) => value === true, {
      message: "You must agree to the Terms and Conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const SubmitFn = (data) => {
    console.log(data);
    reset();
    navigate("/login");
  };

  return (
    <article className="relative pb-30">
      <img
        src="EllipseBg.svg"
        alt="bg"
        className="absolute w-[40%] -z-10 md:block hidden top-[20%]"
      />
      <div className="flex flex-col items-center mt-15 mb-10">
        <button
          className="border p-1 rounded-full bg-[#ff6200] text-white"
          onClick={() => navigate("/")}
        >
          <img src="abia-logo.png" alt="logo" className="w-15 h-15 rounded-full"/>
        </button>
      </div>
      <section className="lg:w-4/6 md:w-5/6 w-[95%] mx-auto bg-gray-50/30 shadow mb-3 rounded-4xl py-10 md:px-20 px-10 border border-gray-50">
        <div className=" mt-1.5 space-y-2">
          <h1 className="md:text-center font-bold text-3xl">
            Create Your Account
          </h1>
          <p className="md:text-center text-gray-700 mb-8">
            Join Abia Green Shuttle and enjoy smarter and stress-free travel.
          </p>
        </div>
        <div className="w-full mx-auto">
          <form action="" onSubmit={handleSubmit(SubmitFn)}>
            <div className="flex flex-col md:flex-row justify-between gap-3 mb-3">
              <div className="w-full md:w-[50%]">
                <label htmlFor="" className="block">
                  First Name
                </label>
                <div className="relative flex border border-gray-400 rounded-xl py-3">
                  <UserRound className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="pl-12 w-full focus:outline-none focus-ring-0"
                    {...register("firstName")}
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-700 text-sm">
                    {errors.firstName.message}{" "}
                  </p>
                )}
              </div>
              <div className="w-full md:w-[50%]">
                <label htmlFor="" className="block">
                  Last Name
                </label>
                <div className="relative flex border border-gray-400 rounded-xl py-3">
                  <UserRound className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="pl-12 w-full focus:outline-none focus-ring-0"
                    {...register("lastName")}
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-700 text-sm">
                    {errors.lastName.message}{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block">
                Email Address
              </label>
              <div className="relative flex border border-gray-400 rounded-xl py-3">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-12 w-full focus:outline-none focus-ring-0"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-700 text-sm">{errors.email.message} </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block">
                Phone Number
              </label>
              <div className="relative flex border border-gray-400 rounded-xl py-3">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  min={0}
                  placeholder="Enter your phone number"
                  className="pl-12 w-full focus:outline-none focus-ring-0 appearance-none
                [&::-webkit-inner-spin-button]:appearance-none
                 [&::-webkit-outer-spin-button]:appearance-none "
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <p className="text-red-700 text-sm">{errors.phone.message} </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3 mb-3">
              <div className="w-full md:w-[50%] ">
                <label htmlFor="" className="block">
                  Date of Birth
                </label>
                <input
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  className="border border-gray-400 rounded-xl py-3 px-5 w-full"
                  {...register("dateOfBirth")}
                />

                {errors.dateOfBirth && (
                  <p className="text-red-700 text-sm">
                    {errors.dateOfBirth.message}{" "}
                  </p>
                )}
              </div>
              <div className="w-full md:w-[50%]">
                <div>
                  <label htmlFor="" className="block">
                    Gender
                  </label>
                  <select
                    name=""
                    id=""
                    className="border border-gray-400 rounded-xl py-3 px-5 w-full"
                    {...register("gender")}
                  >
                    <option value="" hidden>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-red-700 text-sm">
                    {errors.gender.message}{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3 mb-3">
              <div className="w-full md:w-[50%]">
                <label htmlFor="" className="block">
                  Password
                </label>
                <div className="relative flex border border-gray-400 rounded-xl py-3">
                  <div className="flex">
                    <div>
                      <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="pl-12 w-full focus:outline-none focus-ring-0"
                        {...register("password")}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-700 text-sm">
                    {errors.password.message}{" "}
                  </p>
                )}
              </div>
              <div className="w-full md:w-[50%]">
                <label htmlFor="" className="block">
                  Confirm Password
                </label>
                <div className="relative flex border border-gray-400 rounded-xl py-3">
                  <div>
                    <div>
                      <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-12 w-full focus:outline-none focus-ring-0"
                        {...register("confirmPassword")}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-700 text-sm">
                    {errors.confirmPassword.message}{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <input type="checkbox" {...register("terms")} />
              <p>
                I agree to the{" "}
                <span className="text-amber-700">Terms & Conditions</span> and{" "}
                <span className="text-amber-700">Privacy Policy</span>
              </p>
            </div>
            {errors.terms && (
              <p className="text-red-700 text-sm">{errors.terms.message} </p>
            )}

            <button
              type="submit"
              className="border border-gray-400 shadow w-full p-2 rounded-xl mb-3 bg-[#ff6200] hover:bg-[#803100] cursor-pointer transition-all duration-300 text-white"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="flex items-center w-5/6 md:w-3/4 mx-auto gap-3">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-20 my-2">
          <a
            href="https://www.google.com"
            className="flex items-center border border-gray-300 shadow rounded-xl px-10 py-2 gap-2"
          >
            <img src="google.webp" alt="Google" className="h-8 w-12" />
            <span>Sign Up with Google</span>
          </a>
          <a
            href="https://www.apple.com"
            className="flex items-center border border-gray-300 shadow rounded-xl px-10 gap-2"
          >
            <img src="apple.jpg" alt="Apple" className="h-8 w-12" />
            <span>Sign Up with Apple</span>
          </a>
        </div>
        <div className="text-center p-5">
          Already have an account?{" "}
          <span className="text-amber-700">
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </section>
    </article>
  );
}

export default Register;
