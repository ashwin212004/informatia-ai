"use client";
import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";

function PartnerNumber() {
  return (
    <div className="bg-white w-full pt-12 md:pt-16">
      <div className="container mx-auto px-4">

        {/* CARD */}
        <div className="relative w-full min-h-100 overflow-hidden rounded-xl">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-linear-to-t from-white via-[#2aa7a1] to-[#1fa2a6]" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 h-full text-white p-6 md:p-10 gap-8">

            {/* LEFT TEXT */}
            <div className="md:col-span-1 flex flex-col justify-center gap-3 text-center md:text-left">
              <p className="text-xl md:text-3xl">Who we</p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Partnered{" "}
                <span className="font-normal text-xl md:text-3xl">
                  with
                </span>
              </h2>

              <div className="w-fit mx-auto md:mx-0 mt-2">
                <Button text="Start Conversation" />
              </div>
            </div>

            {/* STATS */}
            <div className="md:col-span-3 relative grid grid-cols-1 sm:grid-cols-3 grid-rows-none md:grid-rows-2 text-center md:text-left overflow-hidden gap-6 sm:gap-0">

              {/* GRID LINES (hide on small screens for clean UI) */}
              <svg className="hidden md:block absolute inset-0 w-full h-full">
                <line x1="33.33%" y1="0" x2="33.33%" y2="100%" stroke="rgba(255,255,255,0.3)" />
                <line x1="66.66%" y1="0" x2="66.66%" y2="100%" stroke="rgba(255,255,255,0.3)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.3)" />
              </svg>

              {/* STATS */}
              <div className="flex flex-col justify-center items-center md:items-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold">60+</h1>
                <p className="text-sm opacity-80">Clients</p>
              </div>

              <div className="flex flex-col justify-center items-center md:items-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold">350+</h1>
                <p className="text-sm opacity-80">Projects</p>
              </div>

              <div className="flex flex-col justify-center items-center md:items-start relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold">98%</h1>
                <p className="text-sm opacity-80">Retention</p>
              </div>
            </div>
          </div>

          {/* ROBOT */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <img
              src="/vectors/robot.png"
              alt="robot"
              className="h-32 md:h-40"
            />
          </div>

          {/* BOTTOM FADE */}
          {/* <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-linear-to-t from-white/70 to-transparent" /> */}
        </div>
      </div>
    </div>
  );
}

export default PartnerNumber;