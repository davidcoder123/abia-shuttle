import React from "react";
import { CiHome } from "react-icons/ci";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

export default function LandingPageFirstSection() {
  return (
    <section className="flex md:flex-row flex-col md:gap-2 gap-10 pt-10 items-center pb-20 lg:px-20 md:px-10 px-5">
      <section className="space-y-6 px-8 w-full md:w-[40%]">
        <div className="bg-amber-500/30 rounded-full w-full md:w-50 px-1 py-1 text-center text-sm text-amber-600 font-semibold">
          <p>Smart Travels, Better City</p>
        </div>

        <h1 className="text-5xl font-bold flex flex-col gap-4">
          Your Journey, <span className="text-orange-500">Simplified.</span>
        </h1>

        <p className="text-base font-semibold">
          Track buses live, top up your cards, plan routes and travel smarter
          with <span className="text-orange-400 ">ABIA GREEN SHUTTLE.</span>
        </p>

        <div className="grid grid-cols-[130px_2fr] w-4/5 gap-2">
          <button
            className="bg-[rgba(255,98,0,1)] text-[rgba(255,255,255,1)] flex rounded-md px-4 text-[12px] items-center gap-2 shadow-[inset_0_1px_20px_rgb(0,0,0,0.10)] w-32 h-10 font-medium hover:bg-[rgba(255,98,0,1)]
          "
          >
            <p>Get The App</p>
            <CiHome className="text-lg" />
          </button>

          <div
            className=" text-[rgba(255,98,0,1)] flex rounded-md px-2 text-[12px] items-center gap-2 border w-30 h-10 font-semibold
          "
          >
            <BsEnvelopeFill className="text-[14px]" />
            Watch Demo
          </div>

          <div className="text-white bg-black flex rounded-md px-3 items-center gap-2 border-2 w-29 h-10 font-semibold">
            <img src="playstoreLogo.png" alt="" className="w-6" />
            <p className="text-[8px]">
              GET IT ON <span className="block text-[9px]">Google Play</span>
            </p>
          </div>

          <div className="text-white bg-black flex rounded-md px-2  items-center gap-2 border-2 w-30 h-10 font-semibold -ml-4">
            <IoLogoApple className="text-2xl" />
            <p className="text-[8px]">
              Download on the{" "}
              <span className="block text-[10px]">App Store</span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:w-[60%]">
        <img
          src="/heroImage2.svg"
          alt=""
          className="w-full"
        />
      </section>
    </section>
  );
}
