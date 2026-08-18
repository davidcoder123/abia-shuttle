import React, { useState } from "react";
import image1 from "../../assets/bgimg.jpeg";
import { Eye, EyeOff, Lock, PhoneCall } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";

function LogIn() {
  const navigate = useNavigate();
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
    // if (!/[A-Za-z]/.test(value)) {
    //   return "Password must contain a letter.";
    // }
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

  const handleSubmit = async (e) => {
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

    // 1. Look up the email associated with this phone number
    const { data: email, error: rpcError } = await supabase.rpc(
      "get_email_by_phone",
      { p_phone: phone },
    );

    if (rpcError || !email) {
      setPasswordError("Invalid phone number or password.");
      return;
    }

    // 2. Sign in with the retrieved email and the entered password
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setPasswordError(error.message);
      return;
    }

    console.log("Signed in successfully:", data);
    navigate("/home");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen py-20 bg-cover bg-center bg-no-repeat px-2"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div
        className="bg-white/30 w-2xl rounded-3xl shadow border-[0.5px] 
         border-gray-200 my-2 py-5
        "
      >
        <div
          className=" w-auto flex p-5 mx-auto rounded-2xl 
        mb-5 justify-center items-center "
        >
          <img
            src="abia-logo.png"
            alt="abia logo"
            className="w-15 h-15 rounded-full border-5 border-[#ff6200]"
          />
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

          <form onSubmit={handleSubmit} className="md:px-20 px-5">
            {/* Phone div */}
            <div className="relative">
              <label className=" ml-3 block mb-1">Phone Number</label>

              <PhoneCall
                size={20}
                strokeWidth={1.5}
                className="absolute top-11 left-3"
              />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={() => setphoneError("")}
                className="pl-10 h-13 rounded-2xl shadow-xl w-full mb-2 border border-gray-300"
                placeholder="08031234567"
              />
              <span className="text-red-600 block mb-3 ml-3">{phoneError}</span>
            </div>
            {/* Password div */}
            <div className="relative">
              <label className="ml-3 block mb-1 ">Password</label>
              <Lock
                size={20}
                strokeWidth={1.5}
                className="absolute top-11 left-3 "
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="  Enter your password"
                className="pl-10 h-13 rounded-2xl mx-auto shadow-xl w-full mb-1 border border-gray-300 "
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
                onFocus={handlePasswordFocus}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute top-11 right-5 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>

              <span className="text-red-600 block mb-3 ml-3">
                {passwordError}
              </span>
            </div>

            <div className="flex justify-self-end items-end mr-5 text-red-500">
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>
            {/* sign in div */}
            <div className="">
              <button
                type="submit"
                className="h-13 rounded-2xl shadow-xl w-full text-white md:mt-1 lg:mt-2 
                     bg-[#ff6200] cursor-pointer hover:bg-amber-900"
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
            <button className="pl-7 h-13 flex items-center gap-1 cursor-pointer justify-center rounded-2xl  mx-10 shadow-xl w-4/5  border border-gray-300">
              <FcGoogle size={20} strokeWidth={0} className="text-2xl" />
              <p className="">Continue with Google</p>
            </button>
          </div>

          <div className="">
            <p className="flex items-center justify-center gap-2 lg:mt-3 md:mt-8 ">
              Don't have an account?
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
