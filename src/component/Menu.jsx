import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <>
          <div
            id="menuContent"
            className="absolute right-0 top-full my-2 w-40 bg-gray-100 p-4"
          >
            <ul>
              <li className="pb-2">
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
              </li>

              <li className="pb-2">
                <a
                  href="#whyRaiser"
                  className={`text-base font-normal leading-[27px] text-black ${
                    activeLink === "whyAvesto"
                      ? "font-bold leading-loose text-rose-800"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("whyAvesto")}
                >
                  Why Raiser?
                </a>
              </li>

              <li className="pb-2">
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
              </li>

              <li className="pb-2">
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
              </li>

              <li className="pb-7">
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
              </li>
            </ul>
            <Link
              to="/signin"
              className="rounded-md bg-gradient-to-br from-red-600 to-fuchsia-950 px-3 py-2 text-xs font-extrabold text-white"
            >
              Get Started
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
