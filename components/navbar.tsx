"use client";

import { Briefcase, Heart, Menu, Search, User, X } from "lucide-react";
import Image from "next/image";
import nikelogo from "@/public/assets/landingPage/nikelogo.png";
import minilogo from "@/public/assets/landingPage/minilogo.png";
import { Profiler, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#F5F5F5] text-black shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="hidden md:flex flex-col">
        <div className="flex justify-between w-full py-1">
          <div className="ml-3 md:ml-8">
            <Image src={minilogo} alt="logo" />
          </div>
          {/* <div className="text-sm">Skip to main content</div> */}
          <div className="flex gap-2 pr-4 text-sm items-center">
            <div className="cursor-pointer border-r-2 border-r-black px-2  hover:text-blue-950">Find a Store</div>
            <div className="cursor-pointer border-r-2 border-r-black px-2  hover:text-blue-950">Help</div>
            <div className="cursor-pointer border-r-2 border-r-black px-2  hover:text-blue-950">Join us</div>
            <div className="cursor-pointer hover:text-blue-950 ">Sign in</div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between bg-white p-3 items-center">
          <div className="ml-3 md:ml-8 ">
            <Link href={"/"}>
            <Image src={nikelogo} alt="nike" />
            </Link>
          </div>
          <div className="flex w-full justify-center  items-center gap-6 text-sm ">
            <a className="hover:underline cursor-pointer">New and Featured</a>
            <a className="hover:underline cursor-pointer">Men</a>
            <a className="hover:underline cursor-pointer">Women</a>
            <a className="hover:underline cursor-pointer">Kids</a>
            <a className="hover:underline cursor-pointer">Sale</a>
            <a className="hover:underline cursor-pointer">SNKRS</a>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <div className="rounded-2xl p-1 bg-[#F5F5F5] flex items-center gap-2">
              <Search></Search>
              <input type="text" placeholder="Search" className="border-none" />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <Briefcase />
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden bg-[#F5F5F5] justify-between items-center p-2 ">
        <div className="ml-3">
          <Image src={nikelogo} alt="nike" />
        </div>
        <div className="flex gap-2">
          <Search></Search>
          <User></User>
          <Briefcase></Briefcase>
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <X size={24} className="text-color-pink" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-50`}
          >
            <div className="flex justify-end items-center p-4 ">
             
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center  gap-6 text-lg">
              <div>New and Featured</div>
              <div>Men</div>
              <div>Women</div>
              <div>Kids</div>
              <div>Sale</div>
              <div>SNKRS</div>
            </div>
          </div>
        )}
        
      </nav>
      {/* <div className="hidden md:flex flex-col w-full text-center space-y-2 py-1 bg-[#f5f5f5]">
          <h3 className="text-md">Hello Nike App</h3>
          <p className="text-xs ">Download the app to access everything Nike  <a href="" className=" cursor-pointer underline text-blue-600">Get your great</a></p>
      </div> */}
    </header>
  );
}
