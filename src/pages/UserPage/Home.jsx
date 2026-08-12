import React from 'react'
import Hero from '../../../components/home/Hero'
import QuickActions from '../../../components/home/QuickAction'
import UpcomingDepartures from '../../../components/home/UpcomingDepatures'
import PopularRoutes from '../../../components/home/PopularRoutes'
import LiveTracking from '../../../components/home/LiveTracking'
import WhyChooseUs from '../../../components/home/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <QuickActions />
      <UpcomingDepartures />
      <PopularRoutes /> */}
      <LiveTracking />
      <WhyChooseUs />
    </div>
  )
}

export default Home

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


