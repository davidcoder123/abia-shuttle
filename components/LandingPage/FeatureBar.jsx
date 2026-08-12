import React from "react";
import { FiCrosshair, FiCreditCard, FiNavigation, FiBell } from "react-icons/fi";

export default function FeatureBar() {
  const features = [
    {
      id: "live-tracking",
      title: "Live Tracking",
      description:
        "Track your bus in real-time and know exactly when it will arrive",
      icon: FiCrosshair,
    },
    {
      id: "cashless-payment",
      title: "Cashless Payment",
      description:
        "Top up your card and pay seamlessly, fast, secure and convenient",
      icon: FiCreditCard,
    },
    {
      id: "smart-routes",
      title: "Smart Routes",
      description:
        "Find the best routes estimated fare and arrival times.",
      icon: FiNavigation,
    },
    {
      id: "instant-alerts",
      title: "Instant Alerts",
      description:
        "Get notified about delays, routes changes and important updates.",
      icon: FiBell,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-slate-200/70">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`flex items-center space-x-4 ${
                  index !== 0 ? "lg:pl-6" : ""
                } ${index !== features.length - 1 ? "lg:pr-6" : ""}`}
              >
                {/* ICON BOX */}
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FFE4D3] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#FF6200] stroke-[2.2]" />
                </div>

                {/* TEXT CONTENT */}
                <div className="space-y-1">
                  <h3 className="font-bold text-black text-sm sm:text-base tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-900 leading-5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}