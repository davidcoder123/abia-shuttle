import React, { useState } from "react";
import { FiSearch, FiUser, FiBell } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

//icons
import { IoMdMenu } from "react-icons/io";

export default function HomeNav() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  // Nav items formatted as objects with 'name' and 'to' paths
  const navItems = [
    { name: "Home", to: "/home" },
    // { name: "Bus schedule", to: "/bus-schedule" },
    // { name: "My Card", to: "/my-card" },
    { name: "Bus Schedule", to: "/schedule" },
    { name: "My Card", to: "/card" },
  ];

  return (
    <header className="w-full bg-white border-slate-200 px-6 lg:px-12 py-3.5 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. LOGO SECTION */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#ff6200]/30 p-0.5 flex items-center justify-center bg-white shadow-sm overflow-hidden">
            <img
              src="/abia-logo.png"
              alt="Abia State Logo"
              className="w-full h-full object-contain rounded-full"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <div key={item.name} className="relative py-2">
                <Link
                  to={item.to}
                  onClick={() => setActiveTab(item.name)}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#FF6200] font-semibold"
                      : "text-slate-800 hover:text-[#FF6200]"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Active Orange Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#FF6200] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* 3. RIGHT ACTIONS (ICONS + LOGOUT BUTTON) */}
        <div className="flex items-center space-x-6">
          <button
            aria-label="Search"
            className="text-slate-700 hover:text-[#FF6200] transition-colors cursor-pointer"
          >
            <FiSearch className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            aria-label="User Profile"
            className="text-slate-700 hover:text-[#FF6200] transition-colors cursor-pointer"
          >
            <FiUser className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            aria-label="Notifications"
            className="text-slate-700 hover:text-[#FF6200] transition-colors cursor-pointer"
          >
            <FiBell className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Sign Up Button */}
          <button className="bg-[#FF6200] hover:bg-[#e05600] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-bl-full rounded-br-full rounded-tl-full shadow-sm transition-all duration-150 cursor-pointer ml-2">
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}
