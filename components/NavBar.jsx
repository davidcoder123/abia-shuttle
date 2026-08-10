import React, { useState } from "react";
import { FiSearch, FiUser, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
//import logo from "../assets/logo.png";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("Home");

  // Nav items formatted as objects with 'name' and 'to' paths
  const navItems = [
    { name: "Home", to: "/" },
    // { name: "Bus schedule", to: "/bus-schedule" },
    // { name: "My Card", to: "/my-card" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. LOGO SECTION */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-amber-200 p-0.5 flex items-center justify-center bg-white shadow-sm overflow-hidden">
            <img
              src="/abia-logo.png"
              alt="Abia State Logo"
              className="w-full h-full object-contain rounded-full"
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
                  className={`text-sm font-medium transition-colors ${
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

          {/* Log Out Button */}
          <button className="bg-[#FF6200] hover:bg-[#e05600] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-150 cursor-pointer ml-2">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
