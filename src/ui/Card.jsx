"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/ui/Button";

const Card = ({ i, title, description, src, color, progress, range, targetScale }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // image zoom (parallax feel)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  // card scaling (stack effect)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center">
      
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: color,
        }}
        className="relative w-[90%] h-[70%] rounded-2xl overflow-hidden"
      >

        {/* IMAGE */}
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <Image
            src={`/banners/${src}`}
            fill
            alt="ai"
            className="object-cover"
          />
        </motion.div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center px-10 text-white">
          <div className="space-y-4 max-w-md">
            <p className="opacity-70">Path {i + 1}</p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              {title}
            </h2>

            <p className="text-sm opacity-80">{description}</p>

            <div className="w-fit">
              <Button text="Explore More" />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Card;