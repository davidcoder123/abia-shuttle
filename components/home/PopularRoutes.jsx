import React from 'react';

export default function PopularRoutes() {
  const routes = [
    { title: "Aba Central to Umuahia" },
    { title: "Umuahia to Port Harcourt" },
    { title: "Aba to Owerri Expressway" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Routes</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div 
            key={index} 
            className="bg-[#FF6200] rounded-3xl lg:h-[60vh] md:h-[40vh] h-[78vh] shadow-lg flex items-center justify-center p-8 text-white font-bold text-xl text-center transition-transform hover:scale-[1.02]"
          >
            {route.title}
          </div>
        ))}
      </div>
    </section>
  );
}