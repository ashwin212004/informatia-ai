"use client";
import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const [activeIndex, setActiveIndex] = useState(0);
    const index = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);
    useEffect(() => {
        const unsubscribe = index.on("change", (latest) => {
            setActiveIndex(Math.round(latest));
        });

        return () => unsubscribe();
    }, [index]);



    const current = paths[activeIndex];
    return (
        <div className="w-full bg-white">

            {/* TOP SECTION */}
            <div className="text-center pt-12 md:pt-16 px-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-black">
                    3 Proven paths to successful AI integration
                </h2>
                <p className="text-sm md:text-base text-[#333333] my-2">
                    Exploring AI? Modernizing platforms? Scaling engagement?
                    And all of these leads to Performance. Partner with us for measurable results.
                </p>
            </div>

            {/* DARK SECTION */}
            <div ref={ref} className="relative h-[300vh]">

                <div className="sticky top-0 h-screen">

                    {/* BACKGROUND */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#05010f] via-[#0a0220] to-[#02010a]" /> */}

                    {/* AI INTEGRATION TEXT (CENTERED BELOW HEADING) */}
                    <div className="relative z-10 flex justify-center pt-6 md:pt-10">
                        <svg className="absolute -top-15 left-1/2 -translate-x-1/2 w-[100%]" viewBox="0 0 1200 200" >
                            <text x="50%" y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="none" stroke="#B2BEB5"
                                strokeWidth="1"
                                fontSize="120"
                                fontWeight="700" >
                                AI INTEGRATION </text>
                        </svg>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className="relative w-full mt-6">

                        {/* IMAGE FULL WIDTH */}
                        <img src={current.image} className="w-full h-[50%] object-cover" />


                        {/* OVERLAY CONTENT (LEFT SIDE SAME POSITION) */}
                        <div className="container mx-auto absolute inset-0 flex items-center ">
                            <div className="space-y-3">
                                <p className="text-sm md:text-base opacity-70">{current.label}</p>
                                <h2 className="text-3xl md:text-5xl font-semibold">{current.title}</h2>
                                <div className="w-fit"> <Button text="Explore More" /> </div>
                            </div>
                        </div>

                        {/* DARK OVERLAY FOR READABILITY */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" /> */}
                    </div>

                    {/* BOTTOM FADE */}
                    {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" /> */}
                </div>
            </div>
        </div>
    );
}

export default PathToSuccess;