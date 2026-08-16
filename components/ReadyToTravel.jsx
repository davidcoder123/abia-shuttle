import React from "react";

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function ReadyToTravel() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-[#FF6200] rounded-3xl p-6 sm:p-10 lg:px-14 lg:py-5 flex flex-col md:flex-row items-start justify-between gap-6 overflow-hidden shadow-lg">
        {/* LEFT TEXT CONTENT */}
        <div className="w-full md:w-3/5 text-center md:text-left pt-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-4">
            Ready to travel smarter?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 font-medium tracking-wide">
            Join thousands of smart commuters using ABIA GREEN SHUTTLE.
          </p>
          <div className="w-full flex gap-5 py-5 flex-col md:flex-row md:items-start items-center">
            <button className="bg-gray-900 flex rounded-2xl p-2 text-white w-2/3 lg:w-1/3 md:w-1/2 items-center gap-5 justify-center cursor-pointer">
              <FaGooglePlay className="text-white text-2xl" />
              <span className="text-left text-sm">
                Get it on
                <br />
                <span className="font-medium text-base">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-900 flex rounded-2xl p-2 text-white w-2/3 lg:w-1/3 md:w-1/2 items-center gap-5 justify-center cursor-pointer">
              <FaApple className="text-white text-2xl" />
              <span className="text-left text-sm">
                Get it on
                <br />
                <span className="font-medium text-base">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT BUS IMAGE */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
          <img
            src="Bus2.png"
            alt="Abia Green Shuttle Electric Bus"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
