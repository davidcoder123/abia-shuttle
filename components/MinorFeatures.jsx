import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { TbRouteAltRight } from "react-icons/tb";
import { TfiBell } from "react-icons/tfi";

export default function MinorFeatures() {
  const smallDivs = [
    {
      icon: <IoLocationOutline />,
      h2: "Live Tracking",
      p: "Track your bus in real-time and know excatly when it will arrive",
    },

    {
      icon: <CiCreditCard1 />,
      h2: "Cashless Payment",
      p: "Top up your card and pay seamlessly, fast, secure and convenient",
    },

    {
      icon: <TbRouteAltRight />,
      h2: "Smart Routes",
      p: "Find the best routes estimated fare and arrival times.",
    },

    {
      icon: <TfiBell />,
      h2: "Instant Alerts",
      p: "Get notified about delays, routes changes and important updates.",
    },
  ];
  return (
    <section className="lg:px-12 md:px-6 px-2 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 shadow-sm rounded-2xl lg:px-4 py-6">
        {smallDivs.map((p, idx) => (
          <div
            key={idx}
            className={
              idx === 3
                ? "specialDiv"
                : "normalDiv flex gap-4 border-r border-r-gray-200 justify-center items-center py-4 lg:px-6 px-2"
            }
          >
            <div className="bg-[rgba(255,224,204,1)] text-[rgba(255,98,0,1)] rounded-xl p-4 lg:text-2xl">
              {p.icon}
            </div>

            <div>
              <h2 className="font-bold text-[13px] lg:text-[16px]">{p.h2}</h2>
              <p className=" text-[11px] lg:text-[13px]">{p.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
