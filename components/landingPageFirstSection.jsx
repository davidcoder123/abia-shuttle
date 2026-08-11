import React from "react";
import { CiHome } from "react-icons/ci";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

export default function LandingPageFirstSection() {
  return (
    <section className="grid md:grid-cols-[400px_2fr] grid-cols-1 px-10 gap-2 pt-4 -pb-90">
      <section className="space-y-6 px-8">
        <div className="bg-amber-500 rounded-full w-40 px-2 text-center text-[12px] text-amber-600 font-semibold">
          <p>Smart Travels, Better City</p>
        </div>

        <h1 className="text-5xl font-bold flex flex-col gap-4">
          Your Journey, <span className="text-orange-500">Simplified.</span>
        </h1>

        <p className="text-[12px] font-semibold font-mono">
          Track buses live, top up your cards, plan routes and travel smarter
          with <span className="text-orange-400 ">ABIA GREEN SHUTTLE.</span>
        </p>

        <div className="grid grid-cols-[130px_2fr] w-4/5 gap-2">
          <div
            className="bg-[rgba(255,98,0,1)] text-[rgba(255,255,255,1)] flex rounded-md px-4 text-[12px] items-center gap-2 shadow-[inset_0_1px_20px_rgb(0,0,0,0.10)] w-32 h-10 font-medium
          "
          >
            <p>Get The App</p>
            <CiHome className="text-lg" />
          </div>

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

      <section className="flex flex-col justify-center items-center md:justify-start">
        <img
          src="/heroImage.png"
          alt=""
          className="lg:w-[135%] md:w-[165%] md:max-w-none lg:-ml-60 md:-ml-65 max-w-[130%] -ml-40"
        />
      </section>
    </section>
  );
}
