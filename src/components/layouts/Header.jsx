"use client";
import React, { useState,useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div
className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
  isOpen
    ? "bg-white shadow-md"
    : scrolled
    ? "bg-black/50 backdrop-blur-sm"
    : "bg-white/0"
}`}
    >
      <header className="container mx-auto w-full py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={
      isOpen
        ? "/logos/informatia-black-header.png"
        : "/logos/informatia-logo.png"
    } // put your logo inside public folder
            alt="Informatia AI"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>
        <div className="flex-1 w-full hidden sm:block relative">
          {isOpen && (
            <input
              type="text"
              placeholder="Search ai solution for Rxpad, Pixpro, Hscore..."
              className="w-full h-10 px-5 py-3 rounded-full border bg-gray-100 outline-none placeholder:text-gray-500"
            />
          )}

        </div>

        {/* Desktop Right Section */}
        <div className="flex items-center gap-4">
          {/* Contact Button → ALWAYS visible */}
          <button className="flex items-center gap-2 bg-[#7642B9] hover:bg-[#522475] text-white px-4 md:px-6 py-2 rounded-full  transition">
            <Phone size={16} />
            <span className="hidden sm:inline">Contact us</span>
          </button>

          {/* Menu Button → SHOW ON ALL DEVICES */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        {/* <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div> */}

        {/* Mobile Menu */}

      </header>
       {isOpen && (
      <div
        className={`w-full transition-all duration-500 bg-white`}
      >
        <div className="w-full">
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* LEFT MENU */}
            <div className="space-y-3 text-sm md:text-base">
              <a className="block text-purple-700 font-medium">Home</a>
              <a className="block text-gray-700 hover:text-purple-700">About us</a>
              <a className="block text-gray-700 hover:text-purple-700">Capabilities / Solution</a>
              <a className="block text-gray-700 hover:text-purple-700">Our Approach</a>
            </div>

            {/* MIDDLE - INDUSTRIES */}
            <div>
              {/* <h3 className="font-semibold mb-3">Industries we serve</h3> */}
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>Industries we serve</li>
                <li>Healthcare & Pharma Organizations</li>
                <li>Banking & Financial Institutions</li>
                <li>Enterprise & Corporates</li>
              </ul>
            </div>

            {/* RIGHT LINKS */}
            <div className="space-y-3 text-sm md:text-base">
              <a className="block text-gray-700 hover:text-purple-700">Contact with us</a>
              <a className="block text-gray-700 hover:text-purple-700">Work with us</a>
            </div>

          </div>
        </div>
      </div>
       )}

    </div>
  );
}

export default Header;
