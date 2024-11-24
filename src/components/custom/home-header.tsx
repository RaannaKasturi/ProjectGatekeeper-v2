"use client";

import Link from "next/link";
import { useState } from "react";
import { BsShieldShaded } from "react-icons/bs";
import { ModeToggle } from "./mode-toggle";
import { CgClose } from "react-icons/cg";
import { Button } from "../ui/button";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" flex justify-evenly">
      <header className="fixed md:mt-4 mt-2.5 top-0 w-11/12 bg-secondary-foreground/2 border-2 dark:border-white/20 border-black/20 backdrop-blur-md flex shadow-md rounded-full z-50 m-2">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* LOGO */}
          <Link className="text-xl font-bold text-wrap lg:text-nowrap flex items-center w-min" href="/" ><BsShieldShaded className="mr-2 md:text-2xl text-4xl" /> Project Gatekeeper</Link>

          {/* Desktop NAVLINKS */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
              Home
            </a>
            <a href="#about" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
              About
            </a>
            <a href="#services" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
              Services
            </a>
            <a href="#contact" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
              Contact
            </a>
          </nav>

          <div className="flex space-x-3 justify-between items-center">
            {/* Call to Action Button */}
            <a
              href="#cta"
              className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-secondary hover:text-primary hover:ring-2 ring-inset ring-primary transition"
            >
              Get Started

            </a>
            <div className="md:inline-block hidden">
              < ModeToggle />
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex row items-center space-x-2 md:hidden">
            <div className="">
              < ModeToggle />
            </div>
            <Button
              variant="outline" size="icon" className="rounded-full bg-secondary-foreground/2 dark:border-white/50 border-black/50 md:hidden"
              // className="text-secondary-foreground/80 border-2 p-1 pl-1 rounded-full dark:border-white/50 border-black/50"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (!isMenuOpen) {
                  document.body.style.overflow = "hidden"; // Prevent scrolling
                } else {
                  document.body.style.overflow = "auto"; // Allow scrolling
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-secondary-foreground/75 z-50 flex justify-end">
          <div className="w-full bg-secondary/70 backdrop-blur-md h-full shadow-lg p-4 flex flex-col space-y-4">
            {/* Close Button */}
            <button
              className="self-end text-secondary-foreground/80 border-2 p-1 pl-1 rounded-full dark:border-white/50 border-black/50"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              < CgClose className="text-2xl" />
            </button>
            <div className="flex flex-col columns-1 space-y-5 items-center">
              {/* Navigation Links */}
              <a href="#home" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
                Home
              </a>
              <a href="#about" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
                About
              </a>
              <a href="#services" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
                Services
              </a>
              <a href="#contact" className="text-secondary-foreground text-xl hover:text-primary hover:underline decoration-wavy">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default HomeHeader;
