// export default BusSchedule;
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import ReadyToTravel from "../../../components/ReadyToTravel";

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
    <section className="">
      <div className="min-h-[280px] py-5 px-5 md:px-20 w-full bg-[#FF6200]">
        <div className="mx-4 sm:mx-6 md:mx-10">
          <div>
            <div className="max-w-md pt-5 sm:pt-6 md:pt-0">
              <h1 className="font-bold text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
                Bus Schedule
              </h1>

              <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] text-white">
                Plan your trip with ease.Find the latest bus schedules across
                all routes in Abia State.
              </p>
            </div>

            <div className="min-h-20 w-full bg-white rounded-[20px] mt-3 flex flex-col md:flex-row items-stretch md:items-center px-3 py-3 md:py-0 gap-3 md:gap-4 justify-around">
              <div className="relative flex items-center w-full ">
                <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6200]" />

                <input
                  type="text"
                  name=""
                  id=""
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="h-15 w-full bg-[#D9D9D94F] rounded-[20px] pl-8"
                  placeholder="From city"
                />
              </div>

              <div className="h-10 w-10 shrink-0 rounded-full bg-[#FFD5BB69] flex items-center justify-center self-center">
                <span className="hidden md:block text-[#FF6200]">
                  <FaArrowRightLong />
                </span>
                <span className="block md:hidden text-[#FF6200]">
                  <FaArrowDownLong />
                </span>
              </div>

              <div className="relative flex items-center w-full">
                <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6200]" />

                <input
                  type="text"
                  name=""
                  id=""
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="h-15 w-full bg-[#D9D9D94F] rounded-[20px] pl-8"
                  placeholder="From city"
                />
              </div>

              <div className="w-full md:w-auto">
                <button
                  onClick={handleSearch}
                  className="flex w-full md:w-auto items-center justify-center rounded-[20px] bg-[#FF6200] px-4 py-3 text-white gap-1 font-medium"
                >
                  <IoSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mx-4 sm:mx-6 md:mx-10 my-5 gap-3 py-5 px-5 md:px-20">
        <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#00000085]">
          10 routes available
        </p>

        <div className="flex items-center gap-2">
          <p className="text-sm sm:text-base">Sort by:</p>

          <select
            name=""
            id=""
            className="bg-white text-[10px] sm:text-xs shadow-md rounded-lg px-3 py-2 border border-gray-100 outline-none"
          >
            <option value="">Departure Time</option>
          </select>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 md:mx-10 my-5 flex flex-col gap-y-8 pb-5 px-5 md:px-20">
        {filteredBuses.map((card) => (
          <div
            key={card.id}
            className="min-h-50 w-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] rounded-[20px] px-4 sm:px-5 py-3"
          >
            <div className="flex flex-wrap items-center gap-3">
              {/* Bus */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <FaBus className="text-gray-500 text-sm" />

                <span className="text-gray-500 text-xs sm:text-sm font-medium">
                  {card.text}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <IoCalendarOutline className="text-gray-500 text-sm" />

                <span className="text-gray-500 text-xs sm:text-sm font-medium">
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

            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6 mt-6">
              {/* DEPARTURE */}
              <div className="shrink-0">
                <p className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
                  {card.text3}
                </p>

                <p className="font-medium text-[18px] sm:text-[21px] md:text-[24px] text-[#00000085]">
                  {card.text4}
                </p>

                <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#34A853] mt-2">
                  {card.text5}
                </p>
              </div>

              {/* ROUTE LINE */}
              <div className="flex-1 flex items-center gap-2 w-full lg:w-auto">
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
                <p className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
                  {card.text6}
                </p>

                <p className="font-medium text-[18px] sm:text-[21px] md:text-[24px] text-[#00000085]">
                  {card.text7}
                </p>
              </div>

              {/* PRICE + BUTTON */}
              <div className="shrink-0 text-left lg:text-right">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#FF6200]">
                  {card.text8}
                </p>

                <p className="text-sm text-gray-500">{card.text9}</p>

                <button className="bg-[#FF6200] text-white font-semibold px-5 py-3 rounded-xl mt-3 w-full sm:w-auto">
                  {card.text10}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReadyToTravel/>
    </section>
  );
}

export default BusSchedule;
