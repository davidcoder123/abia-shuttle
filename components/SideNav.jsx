import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiCreditCard,
  FiPlusCircle,
  FiCalendar,
  FiTruck,
  FiCrosshair,
  FiNavigation,
  FiRepeat,
  FiBell,
  FiMapPin,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Safely retrieve location without crashing if used outside <BrowserRouter>
  let currentPath = "/transactions";
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (e) {
    // Fallback path if component is rendered outside Router context
  }

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
      id: "bus-schedule",
      label: "Bus Schedule",
      icon: FiCalendar,
      to: "/schedule",
    },
    { id: "routes", label: "Routes", icon: FiTruck, to: "/routes" },
    // {
    //   id: "live-tracking",
    //   label: "Live Tracking",
    //   icon: FiCrosshair,
    //   to: "/live-tracking",
    // },
    // { id: "my-trips", label: "My Trips", icon: FiNavigation, to: "/my-trips" },
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
    // {
    //   id: "saved-places",
    //   label: "Saved Places",
    //   icon: FiMapPin,
    //   to: "/saved-places",
    // },
    // { id: "profile", label: "Profile", icon: FiUser, to: "/profile" },
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
    <aside
      className={`relative min-h-screen bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* COLLAPSE / EXPAND TOGGLE BUTTON */}
      <div className="flex items-center justify-end p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer shadow-sm"
        >
          {isCollapsed ? (
            <FiChevronRight className="w-5 h-5" />
          ) : (
            <FiChevronLeft className="w-5 h-5" />
          )}
        </button>
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
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-[#FF6200] text-white shadow-md"
                  : "text-slate-800 hover:bg-slate-100 hover:text-slate-900"
              } ${isCollapsed ? "justify-center px-0" : "space-x-3.5"}`}
            >
              <Icon
                className={`shrink-0 text-xl ${
                  isActive ? "text-white" : "text-slate-800"
                }`}
              />

              {!isCollapsed && (
                <span className="truncate tracking-tight">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FiGrid,
//   FiCreditCard,
//   FiDollarSign,
//   FiCalendar,
//   FiMap,
//   FiNavigation,
//   FiClock,
//   FiRepeat,
//   FiBell,
//   FiMapPin,
//   FiUser,
//   FiSettings,
//   FiHelpCircle,
//   FiLogOut,
// } from "react-icons/fi";

// export default function SideNav() {
//   const [activeTab, setActiveTab] = useState("Transactions");

//   const navItems = [
//     {
//       name: "Dashboard",
//       to: "/dashboard",
//       icon: <FiGrid className="w-5 h-5" />,
//     },
//     {
//       name: "My Card",
//       to: "/my-card",
//       icon: <FiCreditCard className="w-5 h-5" />,
//     },
//     {
//       name: "Fund/Load",
//       to: "/fund-load",
//       icon: <FiDollarSign className="w-5 h-5" />,
//     },
//     {
//       name: "Bus Schedule",
//       to: "/bus-schedule",
//       icon: <FiCalendar className="w-5 h-5" />,
//     },
//     { name: "Routes", to: "/routes", icon: <FiMap className="w-5 h-5" /> },
//     {
//       name: "Live Tracking",
//       to: "/live-tracking",
//       icon: <FiNavigation className="w-5 h-5" />,
//     },
//     {
//       name: "My Trips",
//       to: "/my-trips",
//       icon: <FiClock className="w-5 h-5" />,
//     },
//     {
//       name: "Transactions",
//       to: "/transactions",
//       icon: <FiRepeat className="w-5 h-5" />,
//     },
//     {
//       name: "Notifications",
//       to: "/notifications",
//       icon: <FiBell className="w-5 h-5" />,
//     },
//     {
//       name: "Saved Places",
//       to: "/saved-places",
//       icon: <FiMapPin className="w-5 h-5" />,
//     },
//     { name: "Profile", to: "/profile", icon: <FiUser className="w-5 h-5" /> },
//     {
//       name: "Settings",
//       to: "/settings",
//       icon: <FiSettings className="w-5 h-5" />,
//     },
//     {
//       name: "Help Center",
//       to: "/help-center",
//       icon: <FiHelpCircle className="w-5 h-5" />,
//     },
//   ];

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear tokens, redirect to login)
//     console.log("Logged out");
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col justify-between py-6 px-4 shadow-sm">
//       {/* Navigation Links List */}
//       <nav className="flex flex-col space-y-1.5">
//         {navItems.map((item) => {
//           const isActive = activeTab === item.name;
//           return (
//             <Link
//               key={item.name}
//               to={item.to}
//               onClick={() => setActiveTab(item.name)}
//               className={`flex items-center space-x-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
//                 isActive
//                   ? "bg-[#FF6200] text-white shadow-md shadow-orange-500/20 font-semibold"
//                   : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <span className={isActive ? "text-white" : "text-slate-600"}>
//                 {item.icon}
//               </span>
//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Log Out Button at the Bottom */}
//       <div className="pt-4 border-t border-slate-100 mt-4">
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center space-x-3.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-all duration-150 cursor-pointer"
//         >
//           <FiLogOut className="w-5 h-5 text-slate-600 group-hover:text-red-600" />
//           <span>Log Out</span>
//         </button>
//       </div>
//     </aside>
//   );
// }
