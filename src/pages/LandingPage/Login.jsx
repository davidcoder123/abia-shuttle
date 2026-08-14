import React, { useState } from "react";
import image1 from '../../assets/bgimg.jpeg'
import { Eye, EyeOff, Lock, PhoneCall } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function LogIn() {
  const [phone, setPhone] = useState("");
  const [phoneError, setphoneError] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (!/[A-Za-z]/.test(value)) {
      return "Password must contain a letter.";
    }
    if (!/[0-9]/.test(value)) {
      return "Password must contain a number.";
    }
    return "";
  };

  const handlePasswordChange = (raw) => {
    const alnum = (raw || "").replace(/[^A-Za-z0-9]/g, "");
    const limited = alnum.slice(0, 64); // allow up to 64 chars
    setPassword(limited);
    setPasswordError(validatePassword(limited));
  };

  const handlePhoneChange = (value) => {
    const digits = (value || "").replace(/\D/g, "");
    const limited = digits.slice(0, 11);
    setPhone(limited);
    if (limited.length !== 11) {
      setphoneError("Phone number must be exactly 11 digits.");
    } else {
      setphoneError("");
    }
  };

  const handlePasswordFocus = () => {
    const digitCount = (phone || "").replace(/\D/g, "").length;
    if (digitCount === 0) {
      setphoneError("Please enter your phone number");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    const digitCount = (phone || "").replace(/\D/g, "").length;
    if (digitCount !== 11) {
      setphoneError("Enter a valid 11-digit phone number");
      valid = false;
    } else {
      setphoneError("");
    }

    const passwordValidationMessage = validatePassword(password);
    if (passwordValidationMessage) {
      setPasswordError(passwordValidationMessage);
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    // form is valid; handle submit here
    console.log("Sign in", { phone, password });
  };

  return (
    <div
      className="flex justify-center align-middle h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div
        className="bg-white/20 w-2xl rounded-3xl shadow-2xs 
         border-gray-600 my-2 lg:h-[97vh] md:h-[80vh] h-[120vh]
        "
      >
        <div
          className="bg-orange-600 w-1/4 flex p-5 mx-auto rounded-2xl 
        mb-5 mt-5 justify-center items-center "
        >
          <p className="text-white">LOGO</p>
        </div>

        <div className="">
          <h1
            className="text-black font-bold tracking-wide
             text-3xl flex items-center justify-center my-2 mx-auto"
          >
            Welcome Back
          </h1>
          <p className="text-black flex font-medium items-center justify-center mb-5 mx-auto">
            Sign in to your account to continue
          </p>
          <form onSubmit={handleSubmit}>
            {/* Phone div */}
            <div className="relative flex flex-col ">
              <label className="mb-2 ml-17">Phone Number</label>

              <PhoneCall
                size={20}
                strokeWidth={1.5}
                className="absolute top-12 lg:left-18 left-11 md:left-19"
              />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={() => setphoneError("")}
                className="pl-7 h-13 rounded-2xl  mx-auto shadow-xl w-4/5 mb-2 border border-gray-300"
                placeholder="08031234567"
              />
              <span className="text-red-600 block mb-3 ml-17">
                {phoneError}
              </span>
            </div>
            {/* Password div */}
            <div className="relative flex flex-col">
              <label className="ml-17 ">Password</label>
              <Lock
                size={20}
                strokeWidth={1.5}
                className="absolute top-10 lg:left-18 left-11 md:left-19 "
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="  Enter your password"
                className="pl-7 h-13 rounded-2xl mx-auto shadow-xl w-4/5 mb-1 border border-gray-300 "
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
                onFocus={handlePasswordFocus}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute top-11 right-16 lg:right-27 md:right-30 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>

              <span className="text-red-600 block mb-3 ml-17">
                {passwordError}
              </span>
            </div>

            <div className="flex justify-self-end items-end mr-10 lg:mr-25 md:mr-25  text-red-500">
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>
            {/* sign in div */}
            <div className=" flex justify-center">
              <button
                type="submit"
                className="h-13 rounded-2xl shadow-xl w-4/5 text-white md:mt-1 lg:mt-2 
                     bg-orange-600 hover:bg-amber-900"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-2 mt-2 mb-5  ">
            <div className="flex-1 justify-center h-px bg-gray-300 ml-30"></div>
            <span className="px-4 text-gray-700 whitespace-nowrap text-sm">
              or
            </span>
            <div className="flex-1 h-px bg-gray-300 mr-25"></div>
          </div>

          <div className="relative -mt-2 mb-3  flex justify-center">
            <button className="pl-7 h-13 rounded-2xl  mx-10 shadow-xl w-4/5  border border-gray-300">
              <FcGoogle
                size={20}
                strokeWidth={1.5}
                className="absolute top-5 lg:left-50 md:left-50  "
              />
              <p className="font-semibold">Continue with Google</p>
            </button>
          </div>

          <div className="">
            <p className="flex items-center justify-center gap-2 lg:mt-3 md:mt-8 ">
              Don't have an account?{" "}
              <span className="text-orange-600">
                <Link to="/signup">Sign Up </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
