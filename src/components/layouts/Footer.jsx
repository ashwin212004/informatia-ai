"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="container mx-auto  py-16 relative z-10">
        
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-light mb-4">Let’s talk</h2>
            <p className="text-gray-400 text-sm mb-6">
              Have questions or suggestions?<br />
              Contact us and we’ll get back to you
            </p>

            <button className="flex items-center gap-3 bg-purple-600 px-6 py-3 rounded-full">
              Connect Now
              <span className="bg-white text-black rounded-full px-2">→</span>
            </button>

            <p className="mt-10 text-xs text-gray-500">Group of companies</p>
            <p className="text-lg mt-1 italic">Ashirwad Informatia</p>
          </div>

          {/* MIDDLE */}
          <div>
  <h3 className="text-xl mb-4">Information</h3>
  <ul className="space-y-2 text-gray-400">
    <li className="hover:text-white cursor-pointer">Home</li>
    <li>About us</li>
    <li>Capabilities / Solution</li>
    <li>Industries we serve</li>
    <li>Our Approach</li>
    <li>Work with us</li>
  </ul>

  {/* ✅ CERTIFIED BELOW INFORMATION */}
  <div className="mt-10">
    <h3 className="text-xl mb-4">Certified</h3>

    <div className="flex flex-wrap gap-4">
      <img src="/cert/duns.png" className="h-10" />
      <img src="/cert/eight.png" className="h-10" />
      <img src="/cert/gdpr.png" className="h-10" />
      <img src="/cert/hipaa.png" className="h-10" />
      <img src="/cert/iso-2015.png" className="h-10" />
      <img src="/cert/iso-2022.png" className="h-10" />
      <img src="/cert/iso20000.png" className="h-10" />
    </div>
  </div>
</div>
          {/* RIGHT */}
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone size={16} /> 1800 309 4544
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> sales@informatia.ai
              </p>

              <div className="flex gap-4 mt-4">
               <FaLinkedin className="cursor-pointer text-xl hover:text-purple-500" />
<FaInstagram className="cursor-pointer text-xl hover:text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATION */}

      </div>

      {/* BIG SVG TEXT BACKGROUND */}
<div className="container mx-auto w-full  pointer-events-none">
  <svg
    viewBox="0 0 1200 150"
    preserveAspectRatio="none"
    className="w-full h-[120px] md:h-[200px]"
  >
    <text
      x="0"
      y="80%"
      stroke="white"
      strokeWidth="1"
      fill="transparent"
      fontSize="160"
      textLength="1200"
      lengthAdjust="spacingAndGlyphs"
      className="opacity-10 uppercase"
    >
      Informatia AI
    </text>
  </svg>
</div>
    </footer>
  );
}

export default Footer;