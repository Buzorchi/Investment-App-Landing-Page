import React, { useState, Link } from "react";
import logo from "../assets/landingPage/raiser.svg";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar fixed top-0 z-10 inline-flex w-full max-w-[1400px] items-center justify-between border-b-2 border-neutral-100 bg-white px-7 py-2 transition-all duration-700">
        <div className="gap-16 lg:inline-flex lg:items-center lg:justify-center">
          <div>
            <img className="" src={logo} alt="logo" />
          </div>

          <div>
            <nav className="hidden gap-10 lg:inline-flex">
              <a
                href="#home"
                className={`text-base font-normal leading-[27px] text-black ${
                  activeLink === "home"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>

              <a
                href="#whyRaiser"
                className={`text-base font-normal leading-[27px] text-black ${
                  activeLink === "whyRaiser"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("whyRaiser")}
              >
                Why Raiser?
              </a>

              <a
                href="#features"
                className={`text-base font-normal leading-[27px] text-black ${
                  activeLink === "features"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("features")}
              >
                Features
              </a>

              <a
                href="#faq"
                className={`text-base font-normal leading-[27px] text-black ${
                  activeLink === "faq"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("faq")}
              >
                FAQ
              </a>

              <a
                href="#contact"
                className={`text-base font-normal leading-[27px] text-black ${
                  activeLink === "contact"
                    ? "font-bold active:leading-loose active:text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Get in Touch
              </a>
            </nav>
          </div>
        </div>
        <Link
          to="/signin"
          className="hidden animate-pulse rounded-sm bg-gradient-to-br from-red-600 to-fuchsia-950 px-3.5 py-2.5 text-xs font-extrabold  text-white sm:px-10 sm:py-4 lg:block"
        >
          Get Started
        </Link>
        {/*hamburger*/}
        <Hamburger />
      </nav>
    </div>
  );
};

export default Navbar;
