"use client";
import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";

function DigitalSolutions() {
    return (
        <div className="w-full bg-[#f7f7f7] py-12 md:py-16 px-4">
            <div className="container mx-auto">

                {/* HEADING ONLY */}
                <div className="text-start mb-10 w-fit">
                    <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight">
                        Intelligent{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            AI ✦ Digital Solutions
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        that Deliver Measurable Outcomes.
                    </p>
                </div>

                {/* MAIN LAYOUT */}
                <div className="grid md:grid-cols-3 gap-12 items-start">

                    {/* LEFT IMAGE */}
                    <div className="w-full h-[320px] md:h-[380px] relative rounded-xl overflow-hidden">
                        <img
                            src="/banners/ai-powered.png"
                            alt="ai-left"
                            className="object-cover"
                        />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex flex-col gap-5">

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            We empower organizations to design, build, and scale AI-powered
                            digital solutions that drive engagement, efficiency, and growth
                            across industries.
                        </p>

                        {/* BULLETS */}
                        <div className="space-y-3">
                            {[
                                "Strategy",
                                "Driven",
                                "AI-powered",
                                "Outcome-focused",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#2aa7a1] rounded-full" />
                                    <div className="flex-1 h-[1px] bg-gray-200" />
                                    <span className="text-sm text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <div className="pt-2">
                            <Button text="Start Conversation" />
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full h-[320px] md:h-[380px] relative rounded-xl overflow-hidden md:self-start">
                        <img
                            src="/banners/data-dynamic.png"
                            alt="ai-right"
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DigitalSolutions;