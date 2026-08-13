import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Hero() {
  const [userName] = useState("John Adebayo Ojo");
  const [profileImage, setProfileImage] = useState(null);
  const [showBalance, setShowBalance] = useState(true); // State to toggle balance visibility

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

  return (
    <div className="relative min-h-[70vh] w-full bg-[url('/Rectangle%20182.png')] bg-cover bg-center flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-12 w-full max-w-5xl py-12">
        {/* LEFT SIDE: User Profile Details & Image Upload */}
        <div className="flex flex-col items-center bg-white/90 border border-white/10 p-6 h-fit rounded-2xl shadow-2xl w-72 text-white backdrop-blur-md">
          <div className="relative group mb-4">
            <div className="w-28 h-28 rounded-full bg-[#FF6200] flex items-center justify-center text-3xl font-bold overflow-hidden border-4 border-orange-500 shadow-inner text-white">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{firstLetter}</span>
              )}
            </div>

            <label className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-xs font-semibold text-white">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <h2 className="text-lg font-bold text-center text-black tracking-wide">
            {userName}
          </h2>
          <p className="text-xs text-gray-700 mt-1">Account Holder</p>

          <label className="mt-4 px-4 py-2 bg-[#FF6200] hover:bg-orange-500 text-white text-xs font-semibold rounded-lg cursor-pointer transition shadow-md">
            Change Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* RIGHT SIDE: The Card */}
        <div className="w-[370px] lg:w-fit md:w-fit h-[210px] bg-[#FF6200] rounded-2xl p-6 text-white font-sans shadow-2xl flex flex-col justify-between box-border border border-orange-400/30">
          <div>
            <div className="text-sm opacity-90 mb-1">Current Balance</div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">
                {showBalance ? "₦2,000.00" : "₦••••••••"}
              </span>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-white hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
                aria-label={showBalance ? "Hide balance" : "Reveal balance"}
              >
                {showBalance ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-12">
            <div>
              <div className="text-xs opacity-80 mb-0.5">Card Number</div>
              <div className="text-lg tracking-widest">**** **** **** 2345</div>
            </div>

            <div>
              <div className="text-xs opacity-80 mb-0.5">Card Holder</div>
              <div className="text-sm font-bold uppercase">{userName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
