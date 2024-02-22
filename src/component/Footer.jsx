import React from "react";
import logoWhite from "../assets/landingPage/raiserWhite.svg";
import alat from "../assets/landingPage/alat.png";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-rose-800 ">
        <div className="container mx-0 flex flex-wrap items-center justify-between px-10 py-10">
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <img src={logoWhite} className="h-auto w-24" alt="Logo" />
            <h3 className="w-[297px] leading-[1.6875rem] text-white">
              Investment platform built for the users in mind.
            </h3>
          </div>
          <div className="inline-flex gap-10 pt-10 lg:gap-40">
            <div className="flex flex-col gap-5">
              <h4 className="font-bold leading-loose text-white">About Us</h4>
              <p className="text-xs font-normal leading-none text-white">
                About Us
              </p>
              <p className="text-xs font-normal leading-none text-white">
                How It Works
              </p>
              <p className="text-xs font-normal leading-none text-white">
                Our Services
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-bold leading-loose text-white">Community</h4>
              <p className="text-xs font-normal leading-none text-white">
                Help Center
              </p>
              <p className="text-xs font-normal leading-none text-white">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-bold leading-loose text-white">
                Social Media
              </h4>
              <p className="text-xs font-normal leading-none text-white">
                Instagram
              </p>
              <p className="text-xs font-normal leading-none text-white">
                Facebook
              </p>
              <p className="text-xs font-normal leading-none text-white">
                Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="block items-center justify-between px-10 pb-4 text-base font-normal text-white text-opacity-50 sm:flex">
          <div className="flex items-center gap-5 pb-2">
            <h3 className="text-white">Powered by</h3>
            <img src={alat} alt="alat logo" className="w-10" />
          </div>
          <h3 className="pb-2 text-white">
            &copy; ALAT, Inc 2024. All rights reserved.
          </h3>
          <div className="flex gap-2 text-white">
            <h3>Privacy</h3>
            <h3>Security Terms</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
