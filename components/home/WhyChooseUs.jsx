import React from 'react';
import { FaBus, FaCreditCard, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    { 
      title: "Instant Alerts", 
      desc: "A modern way to move around abia", 
      icon: <FaBus className="text-[#FF6200] text-2xl" /> 
    },
    { 
      title: "Cashless Payment", 
      desc: "Top up your travel card and pay", 
      icon: <FaBus className="text-[#FF6200] text-2xl" /> 
    },
    { 
      title: "Real-time Tracking", 
      desc: "Know where your bus is anytime, anywhere.", 
      icon: <FaCreditCard className="text-[#FF6200] text-2xl" /> 
    },
    { 
      title: "Eco-Friendly", 
      desc: "All electric buses for a cleaner, greeener Abia.", 
      icon: <FaLeaf className="text-[#FF6200] text-2xl" /> 
    },
  ];

  return (
    <section className="w-full max-w-6xl  mx-auto px-4 my-18">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Abia Shuttle?</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feat, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center justify-between"
          >
            {/* Soft Orange Circular Icon Background */}
            <div className="w-16 h-16 rounded-full bg-[#FFE0CC] flex items-center justify-center mb-6 shadow-inner">
              {feat.icon}
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-base mb-2">{feat.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}