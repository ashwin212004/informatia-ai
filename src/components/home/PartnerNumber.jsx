"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/ui/Button";

function PartnerNumber() {
  const n1 = useRef(null);
  const n2 = useRef(null);
  const n3 = useRef(null);
  const svgRef = useRef(null);
  const statsRef = useRef(null);

  function animateCount(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);

    function tick() {
      start = Math.min(start + step, target);
      el.textContent = String(Math.floor(start));

      if (start < target) requestAnimationFrame(tick);
      else el.textContent = String(target);
    }

    tick();
  }

  function resetAndCount() {
    [n1, n2, n3].forEach((r) => {
      if (r.current) r.current.textContent = "0";
    });

    setTimeout(() => {
      if (n1.current) animateCount(n1.current, 60, 1800);
      if (n2.current) animateCount(n2.current, 350, 2200);
      if (n3.current) animateCount(n3.current, 98, 1500);
    }, 80);
  }

  function buildLines() {
    const svg = svgRef.current;
    const container = statsRef.current;
    if (!svg || !container) return;

    svg.innerHTML = "";

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    const offset = h * 0.04; // 👈 control this value
    const lines = [
      // vertical (same)
      { x1: w / 3, y1: 0, x2: w / 3, y2: h },
      { x1: (w / 3) * 2, y1: 0, x2: (w / 3) * 2, y2: h },

      // 🔥 TOP LINE (only till first column)
      {
        x1: 0,
        y1: h / 3 + offset,
        x2: w / 3,
        y2: h / 3 + offset,
      },

      // 🔥 BOTTOM LINE (start from center column)
      {
        x1: w / 3,   // start from middle vertical line
        y1: (h / 3) * 2,
        x2: w,
        y2: (h / 3) * 2,
      },
    ];

    lines.forEach((l, i) => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

      line.setAttribute("x1", l.x1);
      line.setAttribute("y1", l.y1);
      line.setAttribute("x2", l.x2);
      line.setAttribute("y2", l.y2);
      line.setAttribute("stroke", "rgba(255,255,255,0.3)");
      line.setAttribute("stroke-width", "1");

      const len = Math.sqrt((l.x2 - l.x1) ** 2 + (l.y2 - l.y1) ** 2);
      line.style.strokeDasharray = String(len);
      line.style.strokeDashoffset = String(len);

      svg.appendChild(line);

      setTimeout(() => {
        line.style.transition = `stroke-dashoffset 1s ease`;
        line.style.strokeDashoffset = "0";
      }, 100 + i * 250);
    });
  }

  function replayLines() {
    const svg = svgRef.current;
    if (!svg) return;

    svg.querySelectorAll("line").forEach((line, i) => {
      const x1 = parseFloat(line.getAttribute("x1"));
      const y1 = parseFloat(line.getAttribute("y1"));
      const x2 = parseFloat(line.getAttribute("x2"));
      const y2 = parseFloat(line.getAttribute("y2"));

      const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      line.style.transition = "none";
      line.style.strokeDashoffset = String(len);

      setTimeout(() => {
        line.style.transition = "stroke-dashoffset 1s ease";
        line.style.strokeDashoffset = "0";
      }, 100);
    });
  }

  useEffect(() => {
    resetAndCount();
    setTimeout(buildLines, 50);

    const interval = setInterval(() => {
      resetAndCount();
      replayLines();
    }, 4500);

    window.addEventListener("resize", buildLines);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", buildLines);
    };
  }, []);

  return (
    <div className="bg-white w-full pt-12 md:pt-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full min-h-100 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-linear-to-t from-white via-[#2aa7a1] to-[#1fa2a6]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 h-full text-white p-6 md:p-10 gap-8">

            <div className="md:col-span-1 flex flex-col justify-center gap-3 text-center md:text-left">
              <p className="text-xl md:text-3xl">Who we</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Partnered <span className="font-normal text-xl md:text-3xl">with</span>
              </h2>
              <div className="w-fit mx-auto md:mx-0">
                <Button text="Start Conversation" />
              </div>
            </div>

            <div
              ref={statsRef}
              className="md:col-span-3 relative flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-3 md:grid-rows-3"
            >

              <svg
                ref={svgRef}
                className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              />

              {/* (0,0) */}
              <div className="flex flex-col items-center justify-center md:col-start-1 md:row-start-1">
                <h1 className="text-3xl md:text-5xl font-bold">
                  <span ref={n1}>60</span>+
                </h1>
                <p className="text-sm md:text-base opacity-80">Clients</p>
              </div>

              {/* (1,1) */}
              <div className="flex flex-col items-center justify-center md:col-start-2 md:row-start-2">
                <h1 className="text-3xl md:text-5xl font-bold">
                  <span ref={n2}>350</span>+
                </h1>
                <p className="text-sm md:text-base opacity-80">Projects</p>
              </div>

              {/* (2,2) */}
              <div className="flex flex-col items-center justify-center md:col-start-3 md:row-start-3">
                <h1 className="text-3xl md:text-5xl font-bold mt-2">
                  <span ref={n3}>98</span>%
                </h1>
                <p className="text-sm md:text-base opacity-80">Retention</p>
              </div>

            </div>
          </div>

          <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <img src="/vectors/robot.png" className="h-32 md:h-40" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default PartnerNumber;