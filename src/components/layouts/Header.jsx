"use client";
import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-linear-to-r from-gray-100 to-purple-200">
      <header className="container mx-auto w-full py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="logos/informatia_logo.png" // put your logo inside public folder
            alt="Informatia AI"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex-1 w-full hidden sm:block relative">
          {isOpen && (
            <input
              type="text"
              placeholder="Search ai solution for Rxpad, Pixpro, Hscore..."
              className="w-full h-10 px-5 py-3 rounded-full border bg-gray-100 outline-none"
            />
          )}
          {isOpen && (
            <div
              className={`absolute left-0 top-full w-full mt-2 z-50 transition-all  duration-200  ${isOpen
                  ? "opacity-100 translate-y-2 visible"
                  : "opacity-0 translate-y-0 invisible"
                }`}
            >
              {/* // <div className="absolute left-0 top-full w-full bg-white border-t shadow-lg z-10"> */}
              <div className="w-full bg-linear-to-r from-gray-100 to-purple-200">

                <div className="w-full">
                  <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* LEFT MENU */}
                    <div className="space-y-3">
                      <a className="block text-purple-700 font-medium">Home</a>
                      <a className="block text-gray-700 hover:text-purple-700">About us</a>
                      <a className="block text-gray-700 hover:text-purple-700">
                        Capabilities / Solution
                      </a>
                      <a className="block text-gray-700 hover:text-purple-700">
                        Our Approach
                      </a>
                    </div>

                    {/* MIDDLE - INDUSTRIES */}
                    <div>
                      <h3 className="font-semibold mb-3">Industries we serve</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Healthcare & Pharma Organizations</li>
                        <li>Banking & Financial Institutions</li>
                        <li>Enterprise & Corporates</li>
                      </ul>
                    </div>

                    {/* RIGHT LINKS */}
                    <div className="space-y-3 text-sm">
                      <a className="block text-gray-700 hover:text-purple-700">
                        Contact with us
                      </a>
                      <a className="block text-gray-700 hover:text-purple-700">
                        Work with us
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
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
