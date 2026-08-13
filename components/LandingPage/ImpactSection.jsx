import React from "react";

export default function ImpactSection() {
  return (
    <section className="w-full md:px-30 mx-auto px-4 sm:px-6 py-10 lg:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* 1. BUS IMAGE CONTAINER */}
        <div className="w-full md:w-[30%] flex justify-center items-center">
          <img
            src="mobile.png"
            alt="Abia State Electric Bus"
            className="w-full lg:max-w-lg object-contain drop-shadow-xl h-100"
          />
        </div>

        {/* 2. IMPACT STATS CARD */}
        <div className="bg-[#ff6200] relative p-6 sm:p-8 text-white w-full md:w-[70%] rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
          
          {/* Section Header */}
          <div>
            <h2 className="font-bold text-3xl tracking-tight">
              Our Impact
            </h2>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-white/20 py-6">
            
            {/* Metric 1 */}
            <div className="border-r border-white/20 pr-3 md:pr-4">
              <p className="font-bold text-xl sm:text-2xl text-white">50+</p>
              <p className="text-xs sm:text-sm text-orange-100 font-medium">
                Electric Buses
              </p>
            </div>

            {/* Metric 2 */}
            <div className="md:border-r border-white/20 pr-3 md:pr-4">
              <p className="font-bold text-xl sm:text-2xl text-white">100k+</p>
              <p className="text-xs sm:text-sm text-orange-100 font-medium">
                Passengers
              </p>
            </div>

            {/* Metric 3 */}
            <div className="border-r border-white/20 pr-3 md:pr-4">
              <p className="font-bold text-xl sm:text-2xl text-white">20+</p>
              <p className="text-xs sm:text-sm text-orange-100 font-medium">
                Routes
              </p>
            </div>

            {/* Metric 4 */}
            <div>
              <p className="font-bold text-xl sm:text-2xl text-white">99%</p>
              <p className="text-xs sm:text-sm text-orange-100 font-medium">
                Customer Satisfaction
              </p>
            </div>

          </div>

          {/* Floating Callout Badges */}
          <div className="flex flex-col md:flex-row items-center gap-3 pt-2 pb-4 relative">
            
            {/* Left Feature Badge */}
            <div className="bg-[#ff6200] border-2 border-orange-300 shadow-md p-3.5 rounded-2xl w-full md:w-auto md:max-w-xs z-10 text-center md:text-left">
              <h3 className="font-bold text-sm sm:text-base text-[#ffe0cc]">
                Powerful Features in your Pocket
              </h3>
            </div>

            {/* Right Sub-text Badge */}
            <div className="bg-[#ffe0cc] p-3 rounded-2xl w-full md:w-auto text-center md:text-left md:-ml-4">
              <p className="font-bold text-xs sm:text-sm italic text-slate-900">
                Everything you need for a smarter travel experience
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}