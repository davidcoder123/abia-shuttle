import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
    { name: "Register", to: "/signup" },
  ];

  const handleMobileNav = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full bg-white border-slate-200 px-4 sm:px-6 md:px-12 lg:px-20 py-3.5 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. LOGO SECTION */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#ff6200]/30 p-0.5 flex items-center justify-center bg-white shadow-sm overflow-hidden">
              <img
                src="/abia-logo.png"
                alt="Abia State Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </Link>
        </div>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <div key={item.name} className="relative py-2">
                <Link
                  to={item.to}
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

        {/* 3. DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => navigate("/home")}
            className="bg-[#FF6200] hover:bg-[#e05600] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-bl-full rounded-br-full rounded-tl-full shadow-sm transition-all duration-150 cursor-pointer"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border-2 border-[#FF6200] hover:bg-[#FF6200]/10 active:scale-95 text-[#FF6200] text-sm font-semibold px-6 py-2.5 rounded-bl-full rounded-br-full rounded-tl-full shadow-sm transition-all duration-150 cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* 4. MOBILE HAMBURGER TOGGLE BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-700 hover:text-[#FF6200] transition cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-7 h-7" />
            ) : (
              <FiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 mt-3 space-y-4 shadow-lg rounded-b-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#FF6200] font-semibold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#FF6200]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2.5">
            <button
              onClick={() => handleMobileNav("/home")}
              className="w-full bg-[#FF6200] hover:bg-[#e05600] active:scale-95 text-white text-sm font-semibold py-3 rounded-bl-full rounded-br-full rounded-tl-full shadow-sm transition cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => handleMobileNav("/login")}
              className="w-full border-2 border-[#FF6200] hover:bg-[#FF6200]/10 active:scale-95 text-[#FF6200] text-sm font-semibold py-2.5 rounded-bl-full rounded-br-full rounded-tl-full shadow-sm transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
