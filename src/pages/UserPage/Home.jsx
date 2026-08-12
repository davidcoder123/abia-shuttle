import React from "react";
import Hero from "../../../components/home/Hero";
//import QuickActions from '../../../components/home/QuickAction'
//import UpcomingDepartures from '../../../components/home/UpcomingDepatures'
//import PopularRoutes from '../../../components/home/PopularRoutes'
import LiveTracking from "../../../components/home/LiveTracking";
import WhyChooseUs from "../../../components/home/WhyChooseUs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";




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

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <QuickActions />
      <UpcomingDepartures />
      <PopularRoutes /> */}
      <section>
        <div className="px-4 py-6 lg:p-10">
          <h1 className="font-bold text-3xl mb-5">Quick Actions</h1>
          <div className="flex flex-col gap-4  lg:flex-row lg:justify-between ">
            {card.map((r, idx) => (
              <div key={idx}>
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
          </div>
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
          <div>
            <div>
              <h1 className="font-bold text-3xl py-15">Popular Routes</h1>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col md:items-center lg:justify-between gap-7 ">
              <img className="w-95" src="/Rectangle 216.png" alt="" />
              <img className="w-95" src="/Rectangle 216.png" alt="" />
              <img className="w-95" src="/Rectangle 216.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <LiveTracking />
      <WhyChooseUs />
    </div>
  );
};

export default Home;

// import React, { useState } from 'react';

// export default function HomePage() {
//   // State for user details and uploaded profile image
//   const [userName] = useState("John Adebayo Ojo");
//   const [profileImage, setProfileImage] = useState(null);

//   // Handle image upload from user computer
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   // Get the first letter of the name for the avatar fallback
//   const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

//   // Data for Quick Actions
//   const actions = [
//     { title: "Seek a Trip", desc: "Plan your next journey with ease", icon: "🚌" },
//     { title: "Bus Schedule", desc: "View live arrival and departure times", icon: "⏰" },
//     { title: "Track Bus", desc: "Real-time tracking for active routes", icon: "📍" },
//   ];

//   // Data for Upcoming Departures
//   const departures = [
//     { time: "09:30 AM", route: "Aba - Umuahia", platform: "Terminal A", status: "On Time", price: "₦500" },
//     { time: "10:15 AM", route: "Umuahia - Owerri", platform: "Terminal B", status: "Boarding", price: "₦700" },
//   ];

//   // Data for Popular Routes
//   const routes = [
//     { title: "Aba Central to Umuahia" },
//     { title: "Umuahia to Port Harcourt" },
//     { title: "Aba to Owerri Expressway" },
//   ];

//   // Data for "Why Choose Abia Shuttle?"
//   const features = [
//     { title: "Instant Alerts", desc: "A modern way to move around abia", icon: "bus" },
//     { title: "Cashless Payment", desc: "Top up your travel card and pay", icon: "card-outline" },
//     { title: "Real-time Tracking", desc: "Know where your bus is anytime, anywhere.", icon: "location" },
//     { title: "Eco-Friendly", desc: "All electric buses for a cleaner, greener Abia.", icon: "leaf" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

//       {/* ================= 1. HERO SECTION ================= */}
//       <div className="relative min-h-[70vh] w-full bg-[url('/Rectangle%20182.png')] bg-cover bg-center flex items-center justify-center p-8 overflow-hidden">
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

//         <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-12 w-full max-w-5xl py-12">

//           {/* LEFT SIDE: User Profile Details & Image Upload */}
//           <div className="flex flex-col items-center bg-white/90 border border-white/10 p-6 h-fit rounded-2xl shadow-2xl w-72 text-white backdrop-blur-md">
//             <div className="relative group mb-4">
//               <div className="w-28 h-28 rounded-full bg-orange-600 flex items-center justify-center text-3xl font-bold overflow-hidden border-4 border-orange-500 shadow-inner text-white">
//                 {profileImage ? (
//                   <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <span>{firstLetter}</span>
//                 )}
//               </div>

//               <label className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-xs font-semibold text-white">
//                 Upload Photo
//                 <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//               </label>
//             </div>

//             <h2 className="text-lg font-bold text-center text-black tracking-wide">{userName}</h2>
//             <p className="text-xs text-gray-700 mt-1">Account Holder</p>

//             <label className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg cursor-pointer transition shadow-md">
//               Change Picture
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//             </label>
//           </div>

//           {/* RIGHT SIDE: The Card */}
//           <div className="w-[420px] h-[210px] bg-[#FF5722] rounded-2xl p-6 text-white font-sans shadow-2xl flex flex-col justify-between box-border border border-orange-400/30">
//             <div>
//               <div className="text-sm opacity-90 mb-1">Current Balance</div>
//               <div className="text-3xl font-bold">₦2,000.00</div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div>
//                 <div className="text-xs opacity-80 mb-0.5">Card Number</div>
//                 <div className="text-lg tracking-widest">**** **** **** 2345</div>
//               </div>

//               <div>
//                 <div className="text-xs opacity-80 mb-0.5">Card Holder</div>
//                 <div className="text-sm font-bold uppercase">{userName}</div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ================= MAIN CONTENT SECTIONS ================= */}
//       <main className="flex-grow pb-20 max-w-5xl mx-auto w-full px-4 pt-10 space-y-16">

//         {/* ================= QUICK ACTIONS ================= */}
//         <section>
//           <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {actions.map((action, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition cursor-pointer">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
//                     {action.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-sm">{action.title}</h4>
//                     <p className="text-xs text-gray-500 mt-0.5">{action.desc}</p>
//                   </div>
//                 </div>
//                 <span className="text-gray-400">&rarr;</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= UPCOMING DEPARTURES ================= */}
//         <section>
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold text-gray-900">Upcoming Departures</h3>
//             <button className="text-orange-600 text-sm font-semibold hover:underline">View All</button>
//           </div>

//           <div className="space-y-4">
//             {departures.map((item, index) => (
//               <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div className="flex items-center gap-4">
//                   <div className="bg-orange-50 text-orange-600 font-bold px-3 py-2 rounded-lg text-sm">
//                     {item.time}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{item.route}</h4>
//                     <p className="text-xs text-gray-500">Platform: {item.platform}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
//                   <div>
//                     <span className="inline-block px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
//                       {item.status}
//                     </span>
//                     <p className="text-sm font-bold text-gray-900 mt-1">{item.price}</p>
//                   </div>
//                   <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-semibold transition shadow-sm">
//                     Book Seat
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= POPULAR ROUTES ================= */}
//         <section>
//           <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Routes</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {routes.map((route, index) => (
//               <div key={index} className="bg-[#FF5722] rounded-2xl h-52 shadow-md flex items-center justify-center p-6 text-white font-bold text-lg text-center">
//                 {route.title}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= LIVE BUS TRACKING (MAP SECTION) ================= */}
//         <section>
//           <h3 className="text-xl font-bold text-gray-900 mb-6">Live Bus Tracking</h3>
//           <div className="w-full h-96 md:h-[450px] bg-white rounded-3xl border-4 border-[#FF5722] shadow-lg overflow-hidden relative">
//             {/* Map image placeholder / integrate your Mapbox or Leaflet component here */}
//             <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium">
//               [ Interactive Map View / Leaflet Map Integration ]
//             </div>
//           </div>
//         </section>

//         {/* ================= WHY CHOOSE ABIA SHUTTLE? ================= */}
//         <section className="text-center pt-6">
//           <h3 className="text-2xl font-bold text-gray-900 mb-10">Why Choose Abia Shuttle?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feat, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
//                 <div className="w-16 h-16 rounded-full bg-orange-100 text-[#FF5722] flex items-center justify-center text-2xl mb-4 shadow-sm">
//                   🚌
//                 </div>
//                 <h4 className="font-bold text-gray-900 text-sm mb-1">{feat.title}</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= READY TO TRAVEL SMARTER? (BANNER) ================= */}
//         <section className="bg-[#FF5722] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
//           <div className="max-w-md z-10">
//             <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to travel smarter?</h3>
//             <p className="text-xs md:text-sm opacity-90 mb-6 leading-relaxed">
//               Join thousands of smart commuters using ABIA GREEN SHUTTLE.
//             </p>
//             <div className="flex items-center gap-4">
//               <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
//                 Google Play
//               </button>
//               <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
//                 App Store
//               </button>
//             </div>
//           </div>

//           <div className="z-10 w-full md:w-auto flex justify-center">
//             {/* Bus graphic placeholder */}
//             <div className="w-72 md:w-96 h-36 bg-white/20 rounded-xl flex items-center justify-center text-white/80 font-semibold text-sm backdrop-blur-sm">
//               [ Bus Illustration Graphic ]
//             </div>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }
