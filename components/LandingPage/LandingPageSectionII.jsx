import React from "react";
import { FaStar } from "react-icons/fa6";
import ImpactSection from "./ImpactSection";

export default function LandingPageSectionII() {
  const myAwesome = [
    {
      id: 1,
      image: "./Maskgroup.png",
      origin: "Uturu",
      destination: "Aba",
      bus: "First Bus",
      time: "6:00 am",
      buss: "Second Bus",
      duration: "10 mins",
      price: "₦1000.00",
    },
    {
      id: 1,
      image: "./Maskgroup.png",
      origin: "Uturu",
      destination: "Aba",
      bus: "First Bus",
      time: "6:00 am",
      buss: "Second Bus",
      duration: "10 mins",
      price: "₦1000.00",
    },
    {
      id: 1,
      image: "./Maskgroup.png",
      origin: "Uturu",
      destination: "Aba",
      bus: "First Bus",
      time: "6:00 am",
      buss: "Second Bus",
      duration: "10 mins",
      price: "₦1000.00",
    },
    {
      id: 1,
      image: "./Maskgroup.png",
      origin: "Uturu",
      destination: "Aba",
      bus: "First Bus",
      time: "6:00 am",
      buss: "Second Bus",
      duration: "10 mins",
      price: "₦1000.00",
    },
    {
      id: 1,
      image: "./Maskgroup.png",
      origin: "Uturu",
      destination: "Aba",
      bus: "First Bus",
      time: "6:00 am",
      buss: "Second Bus",
      duration: "10 mins",
      price: "₦1000.00",
    },
  ];
  return (
    <section className="py-20 lg:px-35 md:px-10 px-6">
      <div className="flex justify-center font-bold text-3xl ">
        <h1 className="mb-15">Explore Top Routes</h1>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 w-full md:gap-5 ">
        {myAwesome.map((product, index) => (
          <div
            key={index}
            className=" shadow-2xl pb-5 rounded-xl flex flex-col gap-3 mb-5 md:mb-2 w-full"
          >
            <img src={product.image} alt="" className="rounded-t-xl" />
            <div className="px-2">
              <h2 className="font-bold px-2.5">
                {product.origin} - {product.destination}
              </h2>
              <div className="flex justify-between px-2.5">
                <p>{product.bus}</p>
                <p>{product.time}</p>
              </div>
              <div className="px-2.5 flex justify-between">
                <p>{product.buss}</p>
                <p>{product.duration}</p>
              </div>
              <p className="px-2.5 font-bold text-[#ff6200]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-5 lg:px-20 px-5 md:px-10">
        <h1 className="flex justify-center font-bold text-3xl pb-10">
          Trusted by Thousands
        </h1>

        <div className="flex flex-col lg:flex-row md:flex-row gap-5 items-center justify-center ">
          <div className="lg:w-[30%] md:w-[30%] w-[80%]  shadow-2xl flex flex-col gap-2.5 rounded-2xl px-2.5 py-5">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className="flex mt-5 gap-2.5">
              <img src="./Ellipse4.png" alt="" />
              <h2>
                Dr. Vin <br />
                Tech Enthusiast
              </h2>
            </div>
            <div className="flex gap-2.5 justify-end text-[#ff6200]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <div className="lg:w-[30%] md:w-[30%] w-[80%] shadow-2xl flex flex-col gap-2.5 rounded-2xl px-2.5 py-5">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className="flex mt-5 gap-2.5">
              <img src="./Ellipse4.png" alt="" />
              <h2>
                Dr. Vin <br />
                Tech Enthusiast
              </h2>
            </div>
            <div className="flex gap-2.5 justify-end text-[#ff6200]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <div className="lg:w-[30%] md:w-[30%] w-[80%] shadow-2xl flex flex-col gap-2.5 rounded-2xl px-2.5 py-5">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className="flex mt-5 gap-2.5">
              <img src="./Ellipse4.png" alt="" />
              <h2>
                Dr. Vin <br />
                Tech Enthusiast
              </h2>
            </div>
            <div className="flex gap-2.5 justify-end text-[#ff6200]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#ff6200] py-5 px-10 lg:mx-20 mx-5 md:mx-10  my-10 text-white rounded-2xl flex flex-col gap-2.5">
        <h1 className="font-bold text-2xl">Ready to travel smarter?</h1>
        <p>Join thousands of smart commuters using ABIA GREEN SHUTTLE</p>

        <div className="flex gap-5">
          <div className="bg-black flex h-fit p-2.5 gap-2.5 rounded-2xl justify-center items-center">
            <img src="./selfhst_google-play.png" alt="" className="w-7.5 h-5" />
            <p className="text-white text-[12px]">
              Get it on <br />
              <span className="font-bold">GOOGLE PLAY</span>
            </p>
          </div>

          <div className="bg-black flex h-fit p-2.5 gap-2.5 rounded-2xl justify-center items-center">
            <img src="./Vector.png" alt="" className="w-7.5 h-5" />
            <p className="text-white text-[12px]">
              Download on the <br />
              <span className="font-bold">App Store</span>
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
