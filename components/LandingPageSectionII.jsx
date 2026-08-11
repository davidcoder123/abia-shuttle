import React from "react";
import { FaStar } from "react-icons/fa6";

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
    <section>
      <div className="flex justify-center font-bold text-3xl">
        <h1 className="py-5">Explore Top Routes</h1>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 grid:gap-2 md:grid-cols-3 w-full justify-center gap-5 lg:gap-2.5 md:gap-2.5 mt-5 lg:px-20 px-5 md:px-10">
        {myAwesome.map((product) => (
          <div className=" shadow-2xl rounded-xl mx-5 flex flex-col gap-1 w-[90%]">
            <img src={product.image} alt="" />
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
        ))}
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row mt-15 justify-between lg:px-20 px-5 md:px-10 ">
        <div className="flex justify-center">
          <img src="./Bus.png" alt="" />
        </div>

        <div className="bg-[#ff6200] relative py-5 text-white lg:w-[60%] md:w-[60%] w-full h-full mt-15 rounded-2xl">
          <h2 className="font-bold text-2xl px-5 pt-2.5">Our Impact</h2>

          <div className="flex justify-between px-5 items-center pt-5">
            <div className="border-r lg:pr-7.5 md:pr-5 pr-5">
              <p className="font-bold text-xl">50+</p>
              <p>Electric Buses</p>
            </div>

            <div className="border-r pr-7.5 md:pl-2 md:pr-5">
              <p className="font-bold text-xl">100k+</p>
              <p>Passengers</p>
            </div>
            <div className="border-r pr-7.5 md:pl-1 md:pr-5">
              <p className="font-bold text-xl">20+</p>
              <p>Routes</p>
            </div>
            <div className="pl-2.5">
              <p className="font-bold text-xl">99%</p>
              <p>Customers Satisfaction</p>
            </div>
          </div>

          <div className="flex pt-5 pb-15 mr-5">
            <div className="bg-[#ff6200] absolute border-2 border-orange-500 lg:-left-25 -left-5  md:-left-10 z-10 p-2.5 rounded-2xl  w-[60%] flex justify-center ">
              <h2 className="font-bold text-xl text-[#ffe0cc]">
                Powerful Features in your Pocket
              </h2>
            </div>
            <div className="bg-[#ffe0cc] p-1.5 rounded-2xl absolute -right-5 lg:right-5 md:-right-1  w-[50%] flex justify-center  mr-0.5">
              <p className="font-bold text-[16px] italic text-black">
                Everything you need for a smarter travel experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 lg:px-20 px-5 md:px-10">
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
            <p className="text-white text-[12px]">Get it on <br />
                <span className="font-bold">GOOGLE PLAY</span>
            </p>
            </div>
            
            <div className="bg-black flex h-fit p-2.5 gap-2.5 rounded-2xl justify-center items-center">
                <img src="./Vector.png" alt="" className="w-7.5 h-5" />
                <p className="text-white text-[12px]">Download on the <br />
                    <span className="font-bold">App Store</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
