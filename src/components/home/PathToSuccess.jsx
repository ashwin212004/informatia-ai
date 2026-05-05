"use client";
import React from "react";
import Button from "@/ui/Button";

const paths = [
  {
    id: 1,
    title: "AI Strategy",
    label: "Path1",
    image: "/banners/strategy.png",
  },
  {
    id: 2,
    title: "AI Development",
    label: "Path2",
    image: "/banners/digital.png",
  },
  {
    id: 3,
    title: "AI Optimization",
    label: "Path3",
    image: "/banners/automation.png",
  },
];

function PathToSuccess() {
  return (
    <div className="w-full bg-white">

      {/* TOP SECTION */}
      <div className="text-center pt-12 md:pt-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl not-last:font-semibold text-black">
          3 Proven paths to successful AI integration
        </h2>
        <p className="text-sm md:text-base text-[#333333] my-2">
          Exploring AI? Modernizing platforms? Scaling engagement?
          And all of these leads to Performance.
        </p>
      </div>

      {/* SVG OVERLAY (HALF OVER IMAGE) */}
<div className="sticky top-0 h-10 md:h-[120px] z-30 bg-white">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
    
    {/* container ONLY for alignment */}
    <div className="container mx-auto h-full flex items-center justify-center">
      <img
        src="/vectors/ai-integration.png"
        className="w-full object-contain translate-y-[15%] translate-y-[25%]"
      />
    </div>

  </div>
</div>

      {/* STICKY SECTION */}
      <div className="relative">
          {paths.map((item) => (
            <div key={item.id} className="sticky top-30">

              {/* FULL WIDTH IMAGE */}
              <div className="relative w-full">

                <img
                  src={item.image}
                  className="w-full h-[80vh] object-cover"
                />

                {/* OVERLAY CONTENT (CONTAINER ONLY HERE) */}
                <div className="container mx-auto absolute inset-0 flex items-center">
                  <div className="space-y-3">
                    <p className="text-xl md:text-3xl opacity-70">
                      {item.label}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                      {item.title}
                    </h2>
                    <div className="w-fit">
                      <Button text="Explore More" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
      </div>

    </div>
  );
}

export default PathToSuccess;