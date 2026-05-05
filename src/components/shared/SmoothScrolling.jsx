"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
       lerp: false,
duration: 1,
easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothTouch: true,
        smooth: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
        autoResize: true,
        syncTouch: false,
        
      }}
    >
      {children}
    </ReactLenis>
  );
}