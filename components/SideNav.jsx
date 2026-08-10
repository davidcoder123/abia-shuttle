import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGrid,
  FiCreditCard,
  FiDollarSign,
  FiCalendar,
  FiMap,
  FiNavigation,
  FiClock,
  FiRepeat,
  FiBell,
  FiMapPin,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

export default function SideNav() {
  const [activeTab, setActiveTab] = useState("Transactions");

  const navItems = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <FiGrid className="w-5 h-5" />,
    },
    {
      name: "My Card",
      to: "/my-card",
      icon: <FiCreditCard className="w-5 h-5" />,
    },
    {
      name: "Fund/Load",
      to: "/fund-load",
      icon: <FiDollarSign className="w-5 h-5" />,
    },
    {
      name: "Bus Schedule",
      to: "/bus-schedule",
      icon: <FiCalendar className="w-5 h-5" />,
    },
    { name: "Routes", to: "/routes", icon: <FiMap className="w-5 h-5" /> },
    {
      name: "Live Tracking",
      to: "/live-tracking",
      icon: <FiNavigation className="w-5 h-5" />,
    },
    {
      name: "My Trips",
      to: "/my-trips",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      name: "Transactions",
      to: "/transactions",
      icon: <FiRepeat className="w-5 h-5" />,
    },
    {
      name: "Notifications",
      to: "/notifications",
      icon: <FiBell className="w-5 h-5" />,
    },
    {
      name: "Saved Places",
      to: "/saved-places",
      icon: <FiMapPin className="w-5 h-5" />,
    },
    { name: "Profile", to: "/profile", icon: <FiUser className="w-5 h-5" /> },
    {
      name: "Settings",
      to: "/settings",
      icon: <FiSettings className="w-5 h-5" />,
    },
    {
      name: "Help Center",
      to: "/help-center",
      icon: <FiHelpCircle className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, redirect to login)
    console.log("Logged out");
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col justify-between py-6 px-4 shadow-sm">
      {/* Navigation Links List */}
      <nav className="flex flex-col space-y-1.5">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center space-x-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-[#FF6200] text-white shadow-md shadow-orange-500/20 font-semibold"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className={isActive ? "text-white" : "text-slate-600"}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Log Out Button at the Bottom */}
      <div className="pt-4 border-t border-slate-100 mt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-all duration-150 cursor-pointer"
        >
          <FiLogOut className="w-5 h-5 text-slate-600 group-hover:text-red-600" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
