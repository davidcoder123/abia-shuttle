import React from "react";
import { FaBus } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoCard } from "react-icons/io5";

export default function Steps() {
  const smallDivs = [
    {
      icon: <BsPerson />,
      h2: "Create an Account",
      p: "Sign up on the app or website",
    },


    {
      icon: <IoCard />,
      h2: "Fund Your Card",
      p: "Top up your travel card seamlessly",
    },

    {
      icon: <FaBus />,
      h2: "Track & Ride",
      p: "Track your bus live and enjoy the ride.",
    },
  ];
  return (
    <section className="bg-[#1A0000] py-10 text-white grid grid-cols-1 lg:grid-cols-2 p-8 md:px-20 px-5">
        <div className="space-y-2 px-6">
      <h1 className="text-3xl font-bold md:text-left text-center">Get Started in 3 Easy Steps</h1>
      <p className="text-sm md:text-left text-center">
        Start your smart travel experience in minutes
      </p>

      <div className="text-center flex flex-col md:flex-row justify-between gap-4 ">
        {smallDivs.map((q, idx)=>
        <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 rounded-md"
          >
            <div className="bg-[#FFE0CC] text-[#FF6200] rounded-full p-3 text-3xl mb-2">
                {q.icon}
            </div>

            <h2 className="font-bold text-[14px]">{q.h2}</h2>
            <p className="text-[12px]">{q.p}</p>
        </div>
        )}
      </div>

      </div>

      <div className="mt-10 md:mt-0">
        <img src="electricBus.png" alt="" className="object-cover h-auto w-full"/>
      </div>
    </section>
  );
}
