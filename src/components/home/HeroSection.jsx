"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";
import { FaCalendarAlt, FaRobot, FaPlay, FaCog } from "react-icons/fa";
const WORDS = ["AI VIDEO.", "AI AGENTS.", "AI VOICE.", "AI VISION."];

export default function HeroSection() {
    const [wordIdx, setWordIdx] = useState(0);
    const [introComplete, setIntroComplete] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIntroComplete(true), 2000);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!introComplete) return;
        const interval = setInterval(() => {
            setWordIdx((i) => (i + 1) % WORDS.length);
        }, 2200);
        return () => clearInterval(interval);
    }, [introComplete]);

    return (
        <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden ">

            {/* ── GLOBE / VIDEO BG ── */}
            <div className="absolute right-0 top-0 w-[65%] h-full z-[5]">

                {/* GLOBE IMAGE */}
                <img
                    src="/vectors/web-world.png"
                    alt="globe"
                    className="w-full h-full object-cover opacity-50"
                />

                {/* OPTIONAL GRID OVERLAY (keep your futuristic look) */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                        maskImage:
                            "radial-gradient(ellipse 80% 90% at 60% 50%,black 40%,transparent 80%)",
                    }}
                />
            </div>

            {/* ── FLOATING ICONS ── */}
            {introComplete && (
  <>
    {[
      { src: "/elments/ai.png", cls: "top-[10%] left-[38%]", bg: "#7c3aed", delay: 0 },
      { src: "/elments/blue.png", cls: "bottom-[25%] left-[46%]", bg: "#14b8a6", delay: 0.15 },
      { src: "/elments/green.png", cls: "top-[8%] right-[6%]", bg: "#7c3aed", delay: 0.1 },
      { src: "/elments/purple.png", cls: "bottom-[28%] right-[4%]", bg: "#0ea5e9", delay: 0.2 },
    ].map((f, i) => (
      <motion.div
        key={i}
        className={`absolute z-15 w-10 md:w-20  rounded-xl flex items-center justify-center ${f.cls}`}
        // style={{ background: f.bg }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -14, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: f.delay },
          scale: { duration: 0.4, delay: f.delay },
          y: {
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          },
        }}
      >
        <img
          src={f.src}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
    ))}

    {/* floating dot */}
    <motion.div
      className="absolute z-[15] w-3 h-3 rounded-sm bg-purple-500 top-[44%] left-[36%]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        rotate: [45, 55, 45],
      }}
      transition={{
        opacity: { duration: 0.3 },
        y: { duration: 3, repeat: Infinity },
        rotate: { duration: 3, repeat: Infinity },
      }}
    />
  </>
)}

            {/* ── ENGINEERING INNOVATION — intro animation ── */}
            <motion.div
                className="absolute inset-0 z-[20] flex items-center justify-center pointer-events-none font-semibold"
                initial={{ opacity: 1 }}
            >

                <motion.span
                    className="text-white font-black whitespace-nowrap tracking-tight"
                    initial={{
                        y: "-100vh", // 👈 start from top
                        fontSize: "clamp(1.5rem,3.5vw,4rem)",
                        opacity: 0,
                    }}
                    animate={{
                        y: ["-100vh", "0vh", "36vh"], // 👈 top → center → bottom
                        fontSize: [
                            "clamp(1.5rem,3.5vw,4rem)", // start small
                            "clamp(1.5rem,3.5vw,4rem)", // same at center (pause)
                            "clamp(2rem,8vw,8.5rem)",     // grow when going down
                        ],
                        opacity: [0, 1, 1],
                    }}
                    transition={{
                        duration: 3,
                        times: [0, 0.5, 1], // 👈 controls pause at center
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    Engineering Innovation.
                </motion.span>
            </motion.div>

            {/* ── MAIN CONTENT (left side) ── */}
            <motion.div
                className="absolute inset-0 z-[10] flex items-center px-10 md:px-16 container mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: introComplete ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="max-w-xs">

                    <h1 className="text-white uppercase leading-[1.05] text-3xl md:text-5xl">
                        Delivering<br />Excellence
                    </h1>

                    {/* cycling word */}
                    <div className="h-10 overflow-hidden mt-1">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={WORDS[wordIdx]}
                                className="block text-3xl md:text-5xl font-bold text-purple-500 uppercase"
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                            >
                                {WORDS[wordIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* <motion.button
                        className="mt-6 flex items-center gap-3 bg-purple-700 hover:bg-purple-600 text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium transition"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Explore More
                        <span className="bg-white text-purple-700 rounded-full w-7 h-7 flex items-center justify-center font-bold text-base">
                            →
                        </span>
                    </motion.button> */}
                    <div className="mt-6">
                        <Button text="Explore More" />
                    </div>

                </div>
            </motion.div>

            {/* ── BOTTOM BAR ── */}
            {/* <motion.div
                className="absolute bottom-0 left-0 right-0 z-[25] border-t border-white/10 px-10 md:px-16 py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <span className="text-white font-black text-3xl md:text-5xl tracking-tight">
                    Engineering Innovation.
                </span>
            </motion.div> */}

        </section>
    );
}