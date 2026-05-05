"use client";
import React from "react";
import Button from "@/ui/Button";

function DigitalSolutions() {
  const bullets = [
    { label: "Strategy", color: "bg-[#2aa7a1]" },
    { label: "Driven", color: "bg-[#2aa7a1]" },
    { label: "AI-Powered", color: "bg-purple-600" },
    { label: "Outcome-focused", color: "bg-purple-600" },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-12 md:py-16 px-4">
      <div className="container mx-auto">

        {/* HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              AI ✦ Digital Solutions
            </span>
          </h2>
          <p className=" text-black mt-2 text-xl md:text-3xl">
            that Deliver Measurable Outcomes.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT IMAGE — tall */}
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src="/banners/ai-powered.png"
              alt="ai-left"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We empower organizations to design, build, and scale AI-powered digital solutions that drive engagement, efficiency, and growth across industries.
            </p>

            {/* BULLETS — dot | line stretches | text right-aligned */}
            <div className="flex flex-col">
              {bullets.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-0 py-[10px] border-b border-gray-200 last:border-b-0"
                >
                  {/* dot */}
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                  {/* stretching line */}
                  {/* <div className="flex-1 h-[1px] bg-gray-200 mx-3" /> */}
                  {/* label — right side */}
                  <span className="text-sm md:text-base text-gray-600 text-right mx-4">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button text="Start Conversation" />
            </div>
          </div>

          {/* RIGHT IMAGE + diagonal deco below */}
          <div className="w-full h-full rounded-xl overflow-hidden transform  md:-translate-y-24">
            <img
              src="/banners/data-dynamic-1.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* diagonal lines decoration */}
          {/* <div className="flex justify-end mt-2 opacity-15">
              <svg width="90" height="70" viewBox="0 0 90 70">
                {[0, 12, 24, 36, 48].map((offset, i) => (
                  <line
                    key={i}
                    x1={offset} y1="70"
                    x2={offset + 70} y2="0"
                    stroke="#888" strokeWidth="1"
                  />
                ))}
              </svg>
            </div> */}
          {/* </div> */}

        </div>
      </div>
    </div>
  );
}

export default DigitalSolutions;