"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPhoneInTalk, MdMail } from "react-icons/md";
import Button from "@/ui/Button";

const certifications = [
  { src: "/cert/duns.png", alt: "DUNS" },
  { src: "/cert/eight.png", alt: "8(a)" },
  { src: "/cert/gdpr.png", alt: "GDPR" },
  { src: "/cert/hipaa.png", alt: "HIPAA" },
  { src: "/cert/iso-2015.png", alt: "ISO 2015" },
  { src: "/cert/iso-2022.png", alt: "ISO 2022" },
  { src: "/cert/iso20000.png", alt: "ISO 20000" },
  { src: "/cert/dpdp-act.png", alt: "DPDP ACT" },
];
function Footer() {
  return (
    <footer className="relative bg-[#0C0C0C] text-white overflow-hidden">
      <div className="container mx-auto pt-12  md:pt-16 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_1fr_1fr_1fr] gap-8">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-5xl font-extralight mb-4">
              Let’s talk
            </div>

            <p className="text-gray-400 text-xs md:text-sm mb-6">
              Have questions or suggestions?<br />
              Contact us and we’ll get back to you
            </p>

            <div className="flex justify-center md:justify-start">
              {/* <button className="flex items-center gap-3 bg-purple-600 px-6 py-3 rounded-full">
                Connect Now
                <span className="bg-white text-black rounded-full px-2">→</span>
              </button> */}
              <Button />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="text-center md:text-left">
            <div className="text-xl md:text-3xl font-extralight mb-4">
              Information
            </div>

            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Capabilities / Solution</li>
              <li className="hover:text-white cursor-pointer">Industries we serve</li>
              <li className="hover:text-white cursor-pointer">Our Approach</li>
              <li className="hover:text-white cursor-pointer">Work with us</li>
            </ul>
          </div>


          <div className="text-center md:text-left">
            <div className="text-xl md:text-3xl font-extralight mb-4">
              Information
            </div>

            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li className="hover:text-white cursor-pointer">Industries we serve</li>
              <li className="hover:text-white cursor-pointer">Banking & Financial Institutions</li>
              <li className="hover:text-white cursor-pointer">Healthcare & Pharma Organizations</li>
              <li className="hover:text-white cursor-pointer">Enterprises & Corporates</li>
            </ul>
          </div>
          {/* RIGHT */}
          <div className="text-center md:text-left">
            <div className="text-xl md:text-3xl font-extralight mb-4">
              Contact
            </div>

            <div className="space-y-3 text-gray-400 text-sm md:text-base">

              <p className="flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                <MdPhoneInTalk className="text-white text-lg md:text-xl" />
                1800 309 4544
              </p>

              <p className="flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                <MdMail className="text-white text-lg md:text-xl" />
                sales@informatia.ai
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-4 text-black">
                <div className="p-1 flex items-center justify-center bg-white rounded-full cursor-pointer hover:text-purple-500">
                  <FaLinkedinIn className="text-lg md:text-xl" />
                </div>

                <div className="p-1 flex items-center justify-center bg-white rounded-full cursor-pointer hover:text-purple-500">
                  <FaInstagram className="text-lg md:text-xl" />
                </div>
              </div>

            </div>
          </div>

          <div className="md:col-start-2 md:col-span-3 mt-10 text-center md:text-left">
            <div className="text-xl md:text-3xl font-extralight mb-4">
              Certified
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.src}
                  alt={cert.alt}
                  className="h-10 md:h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CERTIFICATION */}

      </div>

      {/* Company */}
      <div className="container mx-auto w-full  pointer-events-none">
        <div className="flex flex-col items-start">
          <p className="mt-10 text-xs text-gray-500">Group of companies</p>
          <img
            src="/logos/informatia-white-logo.png"
            alt="informatia-white-logo"
            className=" h-8 md:h-10" />
        </div>
        <img
          src="/vectors/informatia-text.png"
          alt="informatia-text"
          className="w-full h-full" />
      </div>

      {/* consent */}
      <div className="bg-white">
        <div className=" container mx-auto w-full flex justify-between items-center py-3">
          <div className="text-[#666666] font-light text-xs md:text-base">
            © {new Date().getFullYear()} Informatia AI Pvt Ltd. All Rights Reserved
          </div>
          <div className="flex gap-4">
            <a className="text-black cursor-pointer text-xs md:text-base">Privacy Policy</a>
            <a className="text-black cursor-pointer text-xs md:text-base">Terms & Conditions</a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;