import React from "react";
import {
  FaBus,
  FaClock,
  FaLocationArrow,
  FaChevronRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function QuickActions({ onTrackClick }) {
  const handleTrackClick = () => {
    const trackingElement = document.getElementById("live-tracking");
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions = [
    {
      title: "Book a Trip",
      desc: "Book your next journey",
      icon: <FaBus className="text-[#FF6200] text-xl" />,
      to: "/book",
    },
    {
      title: "Bus Schedule",
      desc: "View all bus schedules",
      icon: <FaClock className="text-[#FF6200] text-xl" />,
      to: "/schedule",
    },
    {
      title: "Track Bus",
      desc: "Live bus tracking",
      icon: <FaLocationArrow className="text-[#FF6200] text-xl" />,
      onClick: handleTrackClick, // Attach the scroll function here
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto my-18 px-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            onClick={action.onClick}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <NavLink to={action.to}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FFE0CC] flex items-center justify-center shrink-0">
                  {action.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {action.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{action.desc}</p>
                </div>
              </div>
            </NavLink>

            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
              <FaChevronRight className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
