import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

function BusSchedule() {
  const [routes] = useState([
    {
      id: 1,
      text: "BUS-103",
      text2: "Sat,Jul 25",
      text3: "09:56 PM",
      text4: "Aba",
      text5: "40/40 seats available",
      text6: "01:56 AM",
      text7: "Umuahia",
      text8: "N800.00",
      text9: "per person",
      text10: "Book Now",
      showPill: false,
    },

    {
      id: 2,
      text: "BUS-103",
      text2: "Sat,Jul 25",
      text3: "09:56 PM",
      text4: "Umuahia",
      text5: "30/40 seats available",
      text6: "01:56 AM",
      text7: "Aba",
      text8: "N800.00",
      text9: "per person",
      text10: "Book Now",
      showPill: true,
    },
    {
      id: 3,
      text: "BUS-103",
      text2: "Sat,Jul 25",
      text3: "09:56 PM",
      text4: "Umuahia",
      text5: "30/40 seats available",
      text6: "01:56 AM",
      text7: "Aba",
      text8: "N800.00",
      text9: "per person",
      text10: "Book Now",
      showPill: true,
    },
  ]);

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [filteredBuses, setFilteredBuses] = useState(routes);

  const handleSearch = () => {
    const results = routes.filter((route) => {
      const fromMatch = route.text4
        .toLowerCase()
        .includes(fromCity.toLowerCase());

      const toMatch = route.text7.toLowerCase().includes(toCity.toLowerCase());

      return fromMatch && toMatch;
    });

    setFilteredBuses(results);
  };
  return (
    <section>
      <div className="h-[280px] w-full bg-[#FF6200]">
        <div className="mx-10">
          <div>
            <div className="max-w-md">
              <h1 className="font-bold text-white text-[60px]">Bus Schedule</h1>
              <p className="font-normal text-[20px] text-white">
                Plan your trip with ease.Find the latest bus schedules across
                all routes in Abia State.
              </p>
            </div>
            <div className="h-20 w-full bg-white rounded-[20px] mt-3 flex items-center px-3 justify-around">
              <div className="relative flex items-center">
                <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6200]" />
                <input
                  type="text"
                  name=""
                  id=""
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="h-15 w-120 bg-[#D9D9D94F] rounded-[20px] pl-8"
                  placeholder="From city"
                />
              </div>
              <div className="h-10 w-10 rounded-full bg-[#FFD5BB69] flex items-center justify-center">
                <span className="text-[#FF6200]">
                  <FaArrowRightLong />
                </span>
              </div>
              <div className="relative flex items-center">
                <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6200]" />
                <input
                  type="text"
                  name=""
                  id=""
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="h-15 w-120 bg-[#D9D9D94F] rounded-[20px] pl-8"
                  placeholder="From city"
                />
              </div>
              <div>
                <button
                  onClick={handleSearch}
                  className="flex items-center rounded-[20px] bg-[#FF6200] px-4 py-2 text-white gap-1 font-medium"
                >
                  <IoSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10 my-5">
        <p className="font-medium text-[20px] text-[#00000085]">
          10 routes available
        </p>
        <div className="flex items-center gap-2">
          <p>Sort by:</p>
          <select
            name=""
            id=""
            className="bg-white text-[10px] shadow-md rounded-lg px-3 py-2 border border-gray-100 outline-none"
          >
            <option value="">Departure Time</option>
          </select>
        </div>
      </div>

      <div className="mx-10 my-5 flex flex-col gap-y-8">
        {filteredBuses.map((card) => (
          <div className="h-50 w-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] rounded-[20px] px-5 py-2">
            <div className="flex items-center gap-3">
              {/* Bus */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <FaBus className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm font-medium">
                  {card.text}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <IoCalendarOutline className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm font-medium">
                  {card.text2}
                </span>
              </div>
              {card.showPill && (
                <div className="bg-[#C61A1A14] flex items-center rounded-full px-2 py-2">
                  <p className="font-normal text-[12px] text-[#F80909]">
                    Only 10 left!
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-6 mt-6">
              {/* DEPARTURE */}
              <div className="shrink-0">
                <p className="text-[32px] font-semibold">{card.text3}</p>

                <p className="font-medium text-[24px] text-[#00000085]">
                  {card.text4}
                </p>

                <p className="font-medium text-[16px] text-[#34A853] mt-2">
                  {card.text5}
                </p>
              </div>

              {/* ROUTE LINE */}
              <div className="flex-1 flex items-center gap-2">
                <hr className="flex-1 border-[#FF6200]" />

                <span className="text-[#FF6200]">
                  <FaArrowRightLong />
                </span>

                <span className="text-[#FF6200]">
                  <GoDotFill />
                </span>
              </div>

              {/* ARRIVAL */}
              <div className="shrink-0">
                <p className="text-[32px] font-semibold">{card.text6}</p>

                <p className="font-medium text-[24px] text-[#00000085]">
                  {card.text7}
                </p>
              </div>

              {/* PRICE + BUTTON */}
              <div className="shrink-0 text-right">
                <p className="text-[24px] font-semibold text-[#FF6200]">
                  {card.text8}
                </p>

                <p className="text-sm text-gray-500">{card.text9}</p>

                <button className="bg-[#FF6200] text-white font-semibold px-5 py-3 rounded-xl mt-3">
                  {card.text10}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusSchedule;
