import React from "react";
import { FaBus } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";

export default function SmarterTransportation() {
  const smallDivs = [
    {
      icon: <FaBus />,
      h2: "Instant Alerts",
      p: "A modern way to move around Abia",
    },

    {
      icon: <FaBus />,
      h2: "Cashless Payment",
      p: "Top up your travel card and pay",
    },

    {
      icon: <IoCard />,
      h2: "Real time Tracking",
      p: "Know where your bus is anytime, anywhere.",
    },

    {
      icon: <BiSolidLeaf />,
      h2: "Eco-Friendly",
      p: "All electric buses for a cleaner, greener Abia.",
    },
  ];
  return (
    <section className=" lg:px-35 md:px-20 px-10 text-center py-20">
      <h1 className="text-3xl font-bold mb-2">
        Smarter Transportation For Abia State
      </h1>
      <p className="md:text-base text-sm mb-15">
        Safe, reliable, and eco-friendly transportation for everyone
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-between lg:gap-4 gap-10 mt-4 md:px-4">
        {smallDivs.map((p, idx) => (
          <div
            key={idx}
            className="shadow-xl shadow-gray-200 flex flex-col items-center justify-center py-4 px-8 rounded-md space-y-2"
          >
            <div className="rounded-full p-4 text-[#FF6200] bg-[#FFE0CC] text-3xl">
              {p.icon}
            </div>

            <h2 className="font-bold md:text-[24px] text-[18px]">{p.h2}</h2>
            <p className="md:text-[18px] text-[14px]">{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
