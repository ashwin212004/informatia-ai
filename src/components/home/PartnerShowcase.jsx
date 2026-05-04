"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const logos = [
    { id: "aerx", src: "/brands/aerx.png" },
    { id: "alkem", src: "/brands/alkem.png" },
    { id: "bsv", src: "/brands/bsv.png" },
    { id: "cadila", src: "/brands/cadila.png" },
    { id: "cipla", src: "/brands/cipla.png" },
    { id: "cleanmark", src: "/brands/cleanmark.png" },
    { id: "ipca", src: "/brands/ipca.png" },
    { id: "jagsonpal", src: "/brands/jagsonpal.png" },
    { id: "mankind", src: "/brands/mankind.png" },
    { id: "merck", src: "/brands/merck.png" },
    { id: "proskills", src: "/brands/proskills.png" },
    { id: "signutra", src: "/brands/signutra.png" },
    { id: "spice", src: "/brands/spice.png" },
    { id: "sun-pharma", src: "/brands/sun-pharma.png" },
    { id: "tiealliances", src: "/brands/tiealliances.png" },
    { id: "zydus", src: "/brands/zydus.png" },
    // { id: "aerx", src: "/brands/spice.png" },
    // { id: "aerx", src: "/brands/spice.png" },
    // { id: "aerx", src: "/brands/spice.png" },
    // { id: "aerx", src: "/brands/spice.png" },
];

// 🔁 reusable marquee row
const MarqueeRow = ({ direction = "left" }) => {
    const controls = useAnimation();
    const duplicated = [...logos, ...logos];

    useEffect(() => {
        controls.start({
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
            },
        });
    }, [controls, direction]);

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={() => controls.stop()}   // ⏸ pause
            onMouseLeave={() =>
                controls.start({
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                    transition: {
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    },
                })
            } // ▶ resume
        >
            <motion.div className="flex gap-6 w-max py-2  md:py-4" animate={controls}>
                {duplicated.map((logo, i) => (
                    <div
                        key={i}
                        className="w-28 md:w-48 h-20 md:h-40 relative bg-white rounded-lg flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                    >
                        <img
                            src={logo.src}
                            alt={logo.id}
                            className="max-h-16 md:max-h-32 w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

function PartnerShowcase() {
    return (
        <section className="bg-white py-12  md:py-16">
            <div className="container mx-auto  space-y-6 md:space-y-10">

                {/* TITLE */}
                {/* <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-white font-light">
            Our Partners
          </h2>
        </div> */}

                {/* ROW 1 */}
                <MarqueeRow direction="left" />

                {/* ROW 2 */}
                <MarqueeRow direction="right" />

            </div>
        </section>
    );
}

export default PartnerShowcase;