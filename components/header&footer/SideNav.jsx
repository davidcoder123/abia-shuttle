import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiCreditCard,
  FiPlusCircle,
  FiCalendar,
  FiTruck,
  FiRepeat,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Refs to track sidebar and toggle button elements
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Safely retrieve location without crashing if used outside <BrowserRouter>
  let currentPath = "/history";
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (e) {
    // Fallback path
  }

  // Handle clicking outside the sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click occurred outside both the sidebar AND the toggle button
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsCollapsed(true);
      }
    }

    // Only attach event listener when the sidebar is open
    if (!isCollapsed) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isCollapsed]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: FiGrid, to: "/home" },
    { id: "my-card", label: "My Card", icon: FiCreditCard, to: "/card" },
    {
      id: "fund-load",
      label: "Fund/Load",
      icon: FiPlusCircle,
      to: "/fund-load",
    },
    {
      id: "Book",
      label: "Book",
      icon: FiCalendar,
      to: "/book",
    },
    {
      id: "bus-schedule",
      label: "Bus Schedule",
      icon: FiCalendar,
      to: "/schedule",
    },

    { id: "routes", label: "Routes", icon: FiTruck, to: "/routes" },
    {
      id: "transactions",
      label: "Transactions",
      icon: FiRepeat,
      to: "/history",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: FiBell,
      to: "/notifications",
    },
    { id: "settings", label: "Settings", icon: FiSettings, to: "/settings" },
    {
      id: "help-center",
      label: "Help Center",
      icon: FiHelpCircle,
      to: "/help-center",
    },
    { id: "log-out", label: "Log Out", icon: FiLogOut, to: "/logout" },
  ];

  return (
    <>
      {/* BACKGROUND OVERLAY (Visible when menu is open) */}
      {!isCollapsed && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-90 transition-opacity"
        />
      )}

      {/* FLOATING TOGGLE BUTTON */}
      <button
        ref={toggleButtonRef}
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        className={`fixed top-4 z-110 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:bg-slate-50 ${
          isCollapsed ? "left-4" : "left-58"
        }`}
      >
        {isCollapsed ? (
          <FiChevronRight className="w-5 h-5" />
        ) : (
          <FiChevronLeft className="w-5 h-5" />
        )}
      </button>

      {/* COLLAPSIBLE SIDEBAR */}
      <aside
        ref={sidebarRef}
        className={`h-full z-100 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col fixed left-0 top-0 overflow-hidden ${
          isCollapsed ? "w-0 border-none" : "w-64"
        }`}
      >
        {/* TOP SPACER / HEADER AREA */}
        <div className="p-4 pt-16 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider"></span>
        </div>

        {/* NAVIGATION ITEMS */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentPath === item.to ||
              (currentPath === "/" && item.id === "transactions");

            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => setIsCollapsed(true)} // Closes sidebar when a link is clicked
                className={`flex items-center space-x-3.5 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? "bg-[#FF6200] text-white shadow-md"
                    : "text-slate-800 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`shrink-0 text-xl ${
                    isActive ? "text-white" : "text-slate-800"
                  }`}
                />
                <span className="truncate tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
