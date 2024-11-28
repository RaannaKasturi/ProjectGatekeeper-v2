"use client";

import { BsShieldLockFill, BsShieldShaded } from "react-icons/bs";
import { GiArmoredBoomerang } from "react-icons/gi";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { CgDetailsMore } from "react-icons/cg";
import { Button } from "../ui/button";
import Globe from "./globe";

export function ProjectIsLive() {
    return (
        <div className="mt-5 mb-3 flex justify-center text-center ">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-100"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                <span> <span className="inline-block"><BsShieldShaded /></span> Project Gatekeeper is Live</span>
            </HoverBorderGradient>
        </div>
    );
}

function HeroSection() {
    return (
        <div>
            <div className="relative md:mx-5 h-screen mx-3">
                {/* Background Component */}
                <div className="hidden md:block absolute inset-y-0 right-0 z-0 transform translate-x-4 w-2/3 opacity-100">
                    <Globe />
                </div>
                {/* Foreground Content */}
                <div className="relative z-10 pe-3">
                    <ProjectIsLive />
                </div>
                <div className="relative md:w-3/5 justify-between w-full">
                    <div className="lg:py-10 py-5 text-secondary-foreground w-full">
                        <div className="text-secondary-foreground pe-2 text-2xl font-medium px-3 py-5 flex row space-x-0 items-center">
                            <h1>
                                Your Digital Fortress Needs a Professional and Trusted Lock
                                <span className="inline-block ms-1">
                                    <BsShieldLockFill />
                                </span>
                            </h1>
                        </div>
                        <div className="px-3">
                            <p>
                                Ensure the utmost security for your digital presence with the state-of-the-art and professional SSL certificates, offering comprehensive protection against the ever-growing threats in cyberspace, provided by the experts.
                            </p>
                            <br />
                            <p>
                                Project Gatekeeper is a free SSL certificate facilitator that is designed to be easy to use and secure.
                            </p>
                            <div className="md:space-x-3 md:mt-10 flex md:flex-row flex-col">
                                <Button variant="outline" className="my-3 border border-white rounded-full">
                                    <CgDetailsMore /> Learn More
                                </Button>
                                <Button variant="default" className="my-3 border border-white rounded-full">
                                    <GiArmoredBoomerang />Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeroSection;