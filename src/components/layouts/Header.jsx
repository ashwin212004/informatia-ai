"use client";
import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-linear-to-r from-gray-100 to-purple-200">
      <header className="container mx-auto w-full py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="logos/informatia_logo.png" // put your logo inside public folder
            alt="Informatia AI"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex-1 w-full hidden sm:block">
          {isOpen && (
            <input
              type="text"
              placeholder="Search ai solution for Rxpad, Pixpro, Hscore..."
              className="w-full h-10 px-5 py-3 rounded-full border bg-gray-100 outline-none"
            />
          )}
        </div>

        {/* Desktop Right Section */}
<div className="flex items-center gap-4">
  {/* Contact Button → ALWAYS visible */}
  <button className="flex items-center gap-2 bg-purple-700 text-white px-4 md:px-6 py-2 rounded-full hover:bg-purple-800 transition">
    <Phone size={16} />
    <span className="hidden sm:inline">Contact us</span>
  </button>

  {/* Menu Button → SHOW ON ALL DEVICES */}
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? (
      <X size={28} className="text-black" />
    ) : (
      <Menu size={28} className="text-black" />
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
    </div>
  );
}

export default Header;
