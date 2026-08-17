import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiNavigation } from 'react-icons/fi';

export default function PopularRoutes() {
  const navigate = useNavigate();

  const routes = [
    { 
      id: "bus-a1",
      title: "Aba Central to Umuahia",
      bus: "Bus A1",
      description: "Direct express route connecting Aba Central to Umuahia with live GPS tracking."
    },
    { 
      id: "bus-b2",
      title: "Aba to Port Harcourt",
      bus: "Bus B2",
      description: "Fast transit service across state lines with regular scheduled updates."
    },
    { 
      id: "bus-c3",
      title: "Umuahia to Aba Express",
      bus: "Bus C3",
      description: "Reliable return transit route featuring real-time stop monitoring."
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-10 font-sans">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Routes</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map((route) => (
          <div 
            key={route.id} 
            className="bg-[#FF5722] rounded-3xl h-80 shadow-lg flex flex-col justify-between p-8 text-white text-center transition-transform hover:scale-[1.02]"
          >
            <div className="text-sm uppercase tracking-wider font-semibold bg-white/20 py-1 px-3 rounded-full w-fit mx-auto">
              {route.bus}
            </div>

            <div className="font-bold text-2xl">
              {route.title}
            </div>

            <p className="text-sm opacity-90 font-normal">
              {route.description}
            </p>

            {/* Navigates directly to your router path: /routes */}
            <button 
              onClick={() => navigate('/routes')}
              className="mt-4 bg-white text-[#FF5722] font-semibold py-2 px-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-md cursor-pointer mx-auto"
            >
              <FiNavigation className="text-base" /> Track Live on Map
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}