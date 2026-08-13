import React from 'react';
import { FaBus, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

export default function UpcomingDepartures() {
  const departures = [
    {
      busNumber: "BUS-103",
      date: "Sat, Jul 25",
      departureTime: "09:56 PM",
      departureLocation: "Aba",
      arrivalTime: "01:56 AM",
      arrivalLocation: "Umuahia",
      duration: "4h 0m",
      seatsAvailable: "40/40 seats available",
      price: "₦800.00",
    },
    {
      busNumber: "BUS-103",
      date: "Sat, Jul 25",
      departureTime: "09:56 PM",
      departureLocation: "Aba",
      arrivalTime: "01:56 AM",
      arrivalLocation: "Umuahia",
      duration: "4h 0m",
      seatsAvailable: "40/40 seats available",
      price: "₦800.00",
    },
    {
      busNumber: "BUS-103",
      date: "Sat, Jul 25",
      departureTime: "09:56 PM",
      departureLocation: "Aba",
      arrivalTime: "01:56 AM",
      arrivalLocation: "Umuahia",
      duration: "4h 0m",
      seatsAvailable: "40/40 seats available",
      price: "₦800.00",
    },
    {
      busNumber: "BUS-103",
      date: "Sat, Jul 25",
      departureTime: "09:56 PM",
      departureLocation: "Aba",
      arrivalTime: "01:56 AM",
      arrivalLocation: "Umuahia",
      duration: "4h 0m",
      seatsAvailable: "40/40 seats available",
      price: "₦800.00",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Departures</h3>

      {/* Grid container matching the 2-column layout in the design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {departures.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between"
          >
            {/* Top Badges (Bus Number & Date) */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">
                <FaBus className="text-gray-500 text-xs" />
                {item.busNumber}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">
                <FaCalendarAlt className="text-gray-500 text-xs" />
                {item.date}
              </span>
            </div>

            {/* Middle Route & Timeline Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-2">
              
              {/* Departure Info */}
              <div>
                <div className="text-2xl font-bold text-gray-900">{item.departureTime}</div>
                <div className="text-sm text-gray-500 mt-0.5">{item.departureLocation}</div>
                <div className="text-xs text-green-600 font-medium mt-2">{item.seatsAvailable}</div>
              </div>

              {/* Connecting Line & Duration */}
              <div className="flex-1 w-full sm:px-6 flex flex-col items-center">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                  <FaClock className="text-[10px]" />
                  {item.duration}
                </div>
                <div className="w-full flex items-center">
                  <div className="h-[2px] bg-orange-400 flex-1 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <FaArrowRight className="text-orange-500 text-xs ml-1" />
                </div>
              </div>

              {/* Arrival Info & Price / Button */}
              <div className="flex sm:flex-col items-end sm:items-end justify-between w-full sm:w-auto gap-4 sm:gap-2">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{item.arrivalTime}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{item.arrivalLocation}</div>
                </div>

                <div className="text-right sm:mt-2">
                  <div className="text-lg font-bold text-[#FF6200]">{item.price}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">per person</div>
                </div>
              </div>

            </div>

            {/* Bottom Action Button (Full width on mobile, aligned on right for desktop if needed, or matching layout) */}
            <div className="mt-6 pt-4 border-t border-gray-50 flex justify-end">
              <button className="w-full sm:w-auto bg-[#FF6200] hover:bg-[#e65100] text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                Book Now
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}