import React from "react";
import Hero from "../../../components/home/Hero";
import QuickActions from "../../../components/home/QuickAction";
//import UpcomingDepartures from '../../../components/home/UpcomingDepatures'
import PopularRoutes from "../../../components/home/PopularRoutes";
import LiveTracking from "../../../components/home/LiveTracking";
import WhyChooseUs from "../../../components/home/WhyChooseUs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import ReadyToTravel from "../../../components/ReadyToTravel";

const handleTrackClick = () => {
  const trackingElement = document.getElementById("live-tracking");
  if (trackingElement) {
    trackingElement.scrollIntoView({ behavior: "smooth" });
  }
};

const card = [
  {
    img: "/Rectangle 125.png",
    head: "Book A Trip",
    par: "Book Your Next Journey",
    icon: <MdKeyboardArrowRight />,
  },
  {
    img: "/Rectangle 125.png",
    head: "Bus Schedule",
    par: "View all bus schedules",
    icon: <MdKeyboardArrowRight />,
  },
  {
    img: "/Rectangle 125.png",
    head: "Track Bus",
    par: "Live bus tracking",
    icon: <MdKeyboardArrowRight />,
    onClick: handleTrackClick,
  },
];
const routes = [
  {
    bus: <TbBus />,
    buspar: "BUS-103",
    calendar: <CiCalendar />,
    arrow: <FaArrowRight />,
    dot: <GoDotFill />,
    date: "Sat, Jul 25",
    time: "09:56 PM",
    state: "Aba",
    seats: "40/40 seats avaliable",
    timeicon: <FiClock />,
    km: "4h 0m",
    time2: "01:56 AM",
    destination: "Umuahia",
    charge: "N800.00",
    oar: "per person",
  },
  {
    bus: <TbBus />,
    buspar: "BUS-103",
    calendar: <CiCalendar />,
    arrow: <FaArrowRight />,
    dot: <GoDotFill />,
    date: "Sat, Jul 25",
    time: "09:56 PM",
    state: "Aba",
    seats: "40/40 seats avaliable",
    timeicon: <FiClock />,
    km: "4h 0m",
    time2: "01:56 AM",
    destination: "Umuahia",
    charge: "N800.00",
    oar: "per person",
  },
  {
    bus: <TbBus />,
    buspar: "BUS-103",
    calendar: <CiCalendar />,
    arrow: <FaArrowRight />,
    dot: <GoDotFill />,
    date: "Sat, Jul 25",
    time: "09:56 PM",
    state: "Aba",
    seats: "40/40 seats avaliable",
    timeicon: <FiClock />,
    km: "4h 0m",
    time2: "01:56 AM",
    destination: "Umuahia",
    charge: "N800.00",
    oar: "per person",
  },
  {
    bus: <TbBus />,
    buspar: "BUS-103",
    calendar: <CiCalendar />,
    arrow: <FaArrowRight />,
    dot: <GoDotFill />,
    date: "Sat, Jul 25",
    time: "09:56 PM",
    state: "Aba",
    seats: "40/40 seats avaliable",
    timeicon: <FiClock />,
    km: "4h 0m",
    time2: "01:56 AM",
    destination: "Umuahia",
    charge: "N800.00",
    oar: "per person",
  },
];

const Home = ({ onTrackClick }) => {
  return (
    <div>
      <Hero />
      <QuickActions />
      {/* <UpcomingDepartures /> */}

      <section className="w-full max-w-6xl mx-auto px-4 my-1">
        <div className="px-4 py-6  lg:p-10 my-2 ">
          {/* <h1 className="font-bold text-3xl mb-5">Quick Actions</h1>
          <div className="flex flex-col gap-4  lg:flex-row lg:justify-between ">
            {card.map((r, idx) => (
              <div key={idx}
                onClick={r.onClick}>
                <div className=" flex shadow-xl w-full lg:w-85 min-h-25 lg:justify-between  bg-white  py-5 px-3  gap-4 rounded-xl">
                  <img className="w-15 h-15 object-cover" src={r.img} alt="" />
                  <div className="mr-3 flex-1">
                    <h2 className="font-bold text-lg">{r.head}</h2>
                    <p>{r.par}</p>
                  </div>
                  <div>
                    <p className="text-2xl mt-6 ">{r.icon}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          {/* route section */}
          <div>
            <div>
              <h1 className="font-bold text-3xl py-15">Upcoming Departures</h1>
            </div>

            {/* ---------------- DESKTOP LAYOUT ---------------- */}
            <div className="hidden md:grid grid-cols-2 gap-5">
              {routes.map((n, idx) => (
                <div
                  key={idx}
                  className="w-full rounded-xl border border-gray-100 shadow-md p-4"
                >
                  {/* top pills */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      <span className="text-sm">{n.bus}</span> {n.buspar}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      <span className="text-sm">{n.calendar}</span> {n.date}
                    </span>
                  </div>

                  {/* main row: */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-4">
                        {/* departure */}
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            {n.time}
                          </p>
                          <p className="text-gray-500 text-sm">{n.state}</p>
                        </div>

                        {/* route line */}
                        <div className="flex-1 flex flex-col items-center px-1 min-w-auto">
                          <span className="flex items-center gap-1 text-gray-400 text-xs mb-1 whitespace-nowrap">
                            {n.timeicon} {n.km}
                          </span>
                          <div className="flex items-center w-full">
                            <hr className="flex-1 border-orange-400" />
                            <span className="text-orange-500 text-xs mx-1 shrink-0">
                              {n.arrow}
                            </span>
                            <span className="text-orange-500 text-xs shrink-0">
                              {n.dot}
                            </span>
                          </div>
                        </div>

                        {/* arrival */}
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            {n.time2}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {n.destination}
                          </p>
                        </div>
                      </div>

                      {/* seats */}
                      <p className="text-green-600 text-xs mt-4">{n.seats}</p>
                    </div>

                    {/* price + book */}
                    <div className="flex flex-col items-end shrink-0">
                      <p className="text-orange-500 font-bold text-lg leading-tight">
                        {n.charge}
                      </p>
                      <p className="text-gray-400 text-xs mb-3">{n.oar}</p>
                      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------------- MOBILE LAYOUT ---------------- */}
            <div className="md:hidden space-y-4">
              {routes.map((n, idx) => (
                <div
                  key={idx}
                  className="w-full rounded-xl border border-gray-200 p-4 flex items-start justify-between"
                >
                  <div className="flex gap-6">
                    <div>
                      <p className="text-base font-bold text-gray-900">
                        {n.time}
                      </p>
                      <p className="text-gray-500 text-xs">{n.state}</p>
                      <p className="text-xs mt-2 text-green-700">{n.seats}</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">
                        {n.time2}
                      </p>
                      <p className="text-gray-500 text-xs">{n.destination}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-orange-500 font-bold text-sm">
                      ₦{n.charge.replace("N", "").split(".")[0]}
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-xs font-semibold px-3 py-1.5 rounded-md mt-2">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ..................popular routes..................... */}
          {/* <div>
            <div>
              <h1 className="font-bold text-3xl py-15">Popular Routes</h1>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col md:items-center lg:justify-between gap-7 ">
              <img className="w-95" src="/Rectangle 216.png" alt="" />
              <img className="w-95" src="/Rectangle 216.png" alt="" />
              <img className="w-95" src="/Rectangle 216.png" alt="" />
            </div>
          </div> */}
        </div>
      </section>
      <PopularRoutes />
      <LiveTracking />
      <WhyChooseUs />
      <ReadyToTravel />
    </div>
  );
};

export default Home;
