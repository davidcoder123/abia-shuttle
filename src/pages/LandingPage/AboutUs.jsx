import React, { startTransition } from "react";
import { BiSolidBullseye } from "react-icons/bi";
import { BsEye, BsFillCreditCardFill } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { FaBus, FaCheck, FaLeaf, FaRoute, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiShieldStarLine } from "react-icons/ri";
import ReadyToTravel from "../../../components/ReadyToTravel";
import ScrollToTop from "../../../components/to-top/ScrollToTop";

// Mission,  Vission & values

const Mvc = [
  {
    id: 1,
    title: "Mission",
    icon: <BiSolidBullseye />,
    description:
      " Our mission is to enhance the Abia green Shuttle experience by providing commuters with real-time transit information, seamless transport card management, and accessible digital services that make every journey simpler, more predictable, and stress-free. ",
  },
  {
    id: 2,
    title: "Vission",
    icon: <BsEye />,
    description:
      "To create a smarter, more connected public transportation ecosystem where every commuter in Abia state can travel with confidence, convenience, and real-time access to essential transport services.",
  },
  {
    id: 3,
    title: "Core Values",
    icon: <IoMdHeartEmpty />,
    values: ["Innovation", "Safety", "Sustainability", "Customer First"],
  },
];

// Why Choose Us

const Choose = [
  {
    id: 1,
    icon: <BsFillCreditCardFill />,
    title: "Cashless Payments",
    description: "Recharge and pay securely from your phone",
  },
  {
    id: 2,
    icon: <FaBus />,
    title: "Reliable Transport",
    description: "Always know where your bus is in real time.",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    title: "Live Bus Tracking",
    description: "Never Miss Your Bus Again",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Eco-Friendly",
    description: "Helping build a cleaner Abia through electric buses.",
  },
];

// Our Impact

const impacts = [
  {
    id: 1,
    icon: <FaBus />,
    number: "20k+",
    text: "Electric Buses",
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: "25k+",
    text: "Registered Users",
  },
  {
    id: 3,
    icon: <FaRoute />,
    number: "100k+",
    text: "Successful Trips",
  },
  {
    id: 4,
    icon: <RiShieldStarLine />,
    number: "99%",
    text: "Customer Satisfaction",
  },
];

// what our riders say

const Testimonials = [
  {
    id: 1,
    name: " -Mary A.",
    job: "Student",
    image: "/mary.jpg",
    text: '"ABIA Green Shuttle has completely changed how I commute. Tracking buses in real time saves me so much time."',
  },
  {
    id: 2,
    name: "-Daniel U.",
    job: "civil Servant",
    image: "/daniel.jpg",
    text: '"Cashless payment is simple and secure. The buses are always clean and comfortable."',
  },
  {
    id: 3,
    name: "-Kingsley O.",
    job: "Farmer",
    image: "/king.jpg",
    text: '"The app makes transportation stress-free. Kudos to the entire ABIA Green Shuttle team!"',
  },
];

function AboutUs() {
  return (
    <>
      <div
        className="h-screen bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* <div className='absolute inset-0 bg-black/40'></div> */}

        <div className="text-center py-40 px-6 sm:px-10 md:px20 lg:px-50 bg-black/70 h-full tracking-wide text-[#ffffff] ">
          <h1 className="tracking-wide text-3xl sm:text-4xl md:text-5xl font-bold mb-5 lg:pl-50 shadow-2xl">
            ABOUT US
          </h1>

          <p className="lg:pl-50 md:text-lg text-sm sm:text-base shadow-md">
            The Abia Green Shuttle is a state-sponsored electric vehicle (EV)
            public transport system introduced by the Abia State Government to
            provide affordable, eco-friendly commuting{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col py-10 pb-20 items-center mt-20 lg:px-25 px-6 md:px-15 mb-4 md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src="/Rectangle.png" alt="logo" className="w-full h-auto" />
        </div>

        <div className="ml-0 md:ml-10 w-full md:w-1/2">
          <h1 className="text-3xl font-bold tracking-wide pt-3 pb-7">
            Our Story
          </h1>

          <p className="tracking-wide pb-7">
            ABIA Green Shuttle Was created to modernize public transportation by
            combining clean electric buses with digital technology.{" "}
          </p>

          <p className="pb-10">
            Our platform allows passengers to easily track buses pay digitally,
            plan routes, and enjoy a seamless commuting experience
          </p>

          <p>
            we believe transportation should be smart, affordable and accessible
            to everyone
          </p>
        </div>
      </div>

      <section className=" py-15 lg:px-35 md:px-15 px-6 bg-orange-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Mvc.map((Mvc) => (
            <div
              key={Mvc.id}
              className="bg-[#ffffff] rounded-3xl shadow-md p-8 min-h-80"
            >
              {/* card header */}

              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {Mvc.title}
                </h2>
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-500">
                  {Mvc.icon}
                </div>
              </div>

              {/* mission and Vission */}

              {Mvc.description && (
                <p className=" text-gray-700 text-lg leading-relaxed">
                  {Mvc.description}{" "}
                </p>
              )}

              {/* core values */}

              {Mvc.values && (
                <div className="space-y-5">
                  {Mvc.values.map((value, index) => (
                    <div key={index} className="flex items-center gap-4 pl-17">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-orange-500">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <p className="text-gray-800 font-medium text-lg">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-white py-25 px-5">
        <div className="text-center mb-8 space-y-1">
          <h4 className="rounded-full text-orange-500 bg-orange-200 w-30 mx-auto">
            why choose us
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Thousands choose
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            ABIA Green Shuttle
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Choose.map((Choose) => (
            <div
              key={Choose.id}
              className="border border-gray-200 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md text-center transition"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-orange-100 mx-auto">
                <span className="text-3xl text-orange-600">{Choose.icon}</span>
              </div>
              <h3 className="text-2xl text-gray-900 font-bold">
                {Choose.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{Choose.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our impact */}

      <section className="bg-[#000000] py-10 px-5 text-white">
        <div className="text-center">
          <span className="text-[#ff6200] bg-[#532305] text-xl inline-block px-10 py-2 rounded-md mb-6">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Making Transportation Better Everyday
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl gap-10 mt-10 mx-auto text-center">
          {impacts.map((impact) => (
            <div key={impact.id} className="">
              <div className="text-4xl mb-3 text-[#fd550a] flex justify-center text-center ">
                {impact.icon}
              </div>
              <h2 className="text-2xl font-bold text-[#fd550a]">
                {impact.number}{" "}
              </h2>
              <p className="text-gray-300 text-sm mt-1">{impact.text} </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}

      <section className="bg-[#fff7f4] px-5 py-25">
        <div className="text-center mb-10 ">
          <h3 className="text-[#fd550a] font-medium">What Our Riders Say</h3>
          <p className="text-[#000000] text-3xl font-bold">
            Loved By Thousands of Commuters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto ">
          {Testimonials.map((Testimonial) => (
            <div
              key={Testimonial.id}
              className="border border-gray-200 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-[#fd550a] ">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IoMdStar key={star} />
                ))}
              </div>

              <h2 className="leading-relaxed text-[#000000]">
                {Testimonial.text}
              </h2>
              <div className="flex items-center gap-3 mt-7">
                <img
                  src={Testimonial.image}
                  alt={Testimonial.name}
                  className="w-13 h-13 rounded-full object-cover"
                />

                <div>
                  <h1 className="font-bold text-[#000000] ">
                    {Testimonial.name}
                  </h1>
                  <h5 className="text-[#000000]">{Testimonial.job}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReadyToTravel />
      <ScrollToTop />
    </>
  );
}

export default AboutUs;
