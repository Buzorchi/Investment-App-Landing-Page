import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedMenu, setSelectedMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleMenuClick = (menu) => {
  //   setSelectedMenu(selectedMenu === menu ? null : menu);
  // };

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
        <div
          id="menuContent"
          className="absolute top-full right-0 mt-2 bg-gray-100 w-40 p-4"
        >
          <ul>
            <li>
              <a
                href="#home"
                className={`text-base text-black font-normal leading-[27px] ${
                  activeLink === "home"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#whyAvesto"
                className={`text-base text-black font-normal leading-[27px] ${
                  activeLink === "whyAvesto"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("whyAvesto")}
              >
                Why Avesto?
              </a>
            </li>

            <li>
              <a
                href="#features"
                className={`text-base text-black font-normal leading-[27px] ${
                  activeLink === "features"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("features")}
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className={`text-base text-black font-normal leading-[27px] ${
                  activeLink === "faq"
                    ? "font-bold leading-loose text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("faq")}
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`text-base text-black font-normal leading-[27px] ${
                  activeLink === "contact"
                    ? "font-bold active:leading-loose active:text-rose-800"
                    : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Get in Touch
              </a>
            </li>
            <Link
              to="/signin"
              className="px-3.5 py-2.5 sm:px-10 sm:py-4 bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm  text-white text-xs font-extrabold animate-pulse"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
