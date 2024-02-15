import React, { useState } from "react";
import Menu from "../component/Menu";
import { Link } from "react-router-dom";
import FAQ from "../component/FAQ";
import all from "../assets/landingPage/allInOne.png";
import blackArrow from "../assets/landingPage/blackArrow.svg";
import dollar from "../assets/landingPage/dollar.svg";
import easy from "../assets/landingPage/easy.png";
import layers from "../assets/landingPage/layers.svg";
import lightInbox from "../assets/landingPage/light_inbox.svg";
import line from "../assets/landingPage/line.svg";
import rightArrow from "../assets/landingPage/Arrow.svg";
import safety from "../assets/landingPage/safety.png";
import googleIcon from "../assets/landingPage/logos_google-play-icon.svg";
import appleIcon from "../assets/landingPage/apple-icon.svg";
import logo from "../assets/landingPage/raiser.svg";
import logoWhite from "../assets/landingPage/raiserWhite.svg";
import alat from "../assets/landingPage/alat.png";
import groupInvestment from "../assets/landingPage/groupinvestment.png";
import getToKnow from "../assets/landingPage/Get to know 1.svg";
import experience from "../assets/landingPage/Experience.png";
import interest from "../assets/landingPage/Interest.png";
import DollarInvestment from "../assets/landingPage/DollarInvestment.svg";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="">
      {/* max-w-[1440px] w-full mx-auto  */}
      <nav className="navbar max-w-[1440px] w-full fixed top-0 bg-white z-10 transition-all duration-700 py-2 px-7 border-b-2 border-neutral-100 justify-between items-center inline-flex">
        <div className="flex items-center gap-20">
          {/* logo */}
          <img className="" src={logo} alt="logo" />

          <div>
            <nav className="justify-start items-center gap-16 lg:inline-flex hidden">
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
            </nav>
          </div>
        </div>
        <Link
          to="/signin"
          className="hidden lg:block px-3.5 py-2.5 sm:px-10 sm:py-4 bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm  text-white text-xs font-extrabold animate-pulse"
        >
          Get Started
        </Link>
        {/*menu*/}
        <Menu />
      </nav>

      {/* main content */}
      <main>
        <div className="my-24 w-[90%] mx-auto">
          {/* w-[90%] mx-auto my-24 */}
          {/* home */}
          <section id="home" className="">
            <div className="text-center py-12  ">
              <h2 className="text-center text-rose-800 text-[32px] lg:text-6xl font-bold  leading-10  ">
                Simplified Investing Just <br /> for you.
              </h2>
              <h2 className="text-zinc-900 text-base md:text-lg font-normal my-8">
                Set out on your financial adventure with assurance, where
                maneuvering through the complexities of finance <br /> feels
                like a gentle breeze!
              </h2>

              <Link to="/">
                <div className="gap-5 flex justify-center">
                  <button className="w-[178.81px] h-[62.07px] bg-zinc-900 rounded-[1.12px] inline-flex justify-center items-center gap-5 transition ease-in-out delay-150 duration-700 hover:-translate-y-1 hover:scale-110">
                    <img src={googleIcon} alt="" />
                    <div className="text-white flex-col justify-start items-start inline-flex">
                      <p className="font-normal leading-3 text-white text-xs  ">
                        Get it on
                      </p>
                      <span className="leading-tight font-semibold">
                        Google Play
                      </span>
                    </div>
                  </button>
                  <button className="w-[178.81px] h-[62.07px] bg-zinc-900 rounded-[1.12px] inline-flex justify-center items-center gap-5 transition ease-in-out delay-150 duration-700 hover:-translate-y-1 hover:scale-110 ">
                    <img src={appleIcon} alt="" />
                    <div className="text-white flex-col justify-start items-start inline-flex">
                      <p className="font-normal leading-3 text-white text-xs  ">
                        Download on the
                      </p>
                      <span className="leading-tight font-semibold">
                        Apple Store
                      </span>
                    </div>
                  </button>
                </div>
              </Link>
              {/* className="text-xs lg:text-xl mt-4 px-4 py-2 font-bold text-white bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm " */}
            </div>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[372px]"
                src={`https://www.youtube.com/embed/${"0kwl10ftLm0"}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* why avesto */}
          <section id="whyAvesto" className="pt-10">
            <div className="text-center py-12 ">
              <h2 className="text-center leading-10 lg:text-5xl text-[32px]">
                Our Best Services <br /> For Your Convenience.
              </h2>
              <p className="text-zinc-900 text-base lg:text-base font-normal  my-8">
                Enjoy unbeatable convenience with our amazing services! We've
                got you covered with top-notch options, making sure everything
                fits your className effortlessly.
              </p>
              <img className="m-auto" src={line} alt="line" />

              {/* side images */}
              {/* <div className="">
                <img src={sideimg1} alt="sideimg" className="absolute" />
                <img src={siderimg2} alt="sideimg" className="absolute" />
              </div> */}
            </div>

            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                <img src={safety} alt="safety" />
                <h2 className="font-medium my-8">Guarantee Safety</h2>
                <p className="font-normal leading-[27px">
                  Prioritizes security security with cutting-edge tech and
                  strict regulations. Your security is addressed with advanced
                  data encryption, regulatory compliance, and fraud protection.
                </p>
              </div>

              <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                <img src={all} alt="all" />
                <h2 className="font-medium my-8">All in One App</h2>
                <p>
                  Tailored for young Nigerians, offers an all-in-one experience
                  — from seamless transactions and educational resources to
                  diverse investment options, empowering your financial journey.
                </p>
              </div>

              <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                <img src={easy} alt="easy" />
                <h2 className="font-medium my-8">Easy to Use</h2>
                <p>
                  Designed with young Nigerians in mind. Enjoy an effortlessly
                  intuitive experience, easy navigation, smart features, and a
                  wealth of financial opportunities at your fingertips.
                </p>
              </div>
            </div>
            <section>
              <div className="my-10 text-center">
                <h2 className="text-2xl lg:text-5xl">
                  These are reasons why you should use <br /> Avesto
                </h2>
                <p className="text-zinc-900 text-base lg:text-base font-normal leading-[27px] my-6">
                  Unlock and secure your financial potential here!
                </p>
                <img className="m-auto" src={line} alt="line" />
              </div>
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                  <img src={safety} alt="safety" />
                  <h2 className="font-medium text-2xl my-8">
                    Diversified Investment
                  </h2>
                  <p className="font-normal leading-[27px">
                    Elevate your wealth game! Avesto offers a vibrant mix,
                    helping young Nigerians diversify smartly for a brighter,
                    more resilient financial future. Dare to diversify, thrive
                    together!
                  </p>
                </div>

                <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                  <img src={all} alt="all" />
                  <h2 className="font-medium text-2xl  my-8">
                    Educational Resources
                  </h2>
                  <p>
                    Empower your future! Avesto not only grows your wealth but
                    also equips you with financial education resources,
                    empowering young Nigerians to make informed decisions and
                    thrive financially.
                  </p>
                </div>

                <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                  <img src={easy} alt="easy" />
                  <h2 className="font-medium text-2xl my-8">Minimal Risk</h2>
                  <p>
                    Unlock low-risk, high-reward vibes! Avesto is your ticket to
                    financial growth with minimal risks. Dive into smart
                    investments tailored for you – secure, steady, and thriving.
                  </p>
                </div>

                <div className="p-5 bg-white shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-700">
                  <img src={easy} alt="easy" />
                  <h2 className="font-medium text-2xl my-8">
                    User-Friendly Interface:
                  </h2>
                  <p>
                    Unlock low-risk, high-reward vibes! Avesto is your ticket to
                    financial growth with minimal risks. Dive into smart
                    investments tailored for you – secure, steady, and thriving.
                  </p>
                </div>
              </div>
            </section>
          </section>

          {/* features */}
          <section id="features" className="pt-10">
            <div className="my-10 text-center">
              <h2 className="text-center sm:text-5xl leading-loose">
                Unlock a World of Incredible Features
              </h2>
              <p className="my-8">
                Open the doors to amazing vibes and dope features! Experience a
                world of awesomeness waiting for you to explore and enjoy.
              </p>
              <img className="mx-auto" src={line} alt="line" />
            </div>
            {/* not completed */}
            <div class="bg-rose-800 flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-around">
              <div class="pt-5">
                <img src={lightInbox} alt="lightInbox" />
                <h2 class=" text-white font-semibold leading-[55.50px] py-10">
                  Personalized Investment
                </h2>
                <p class="w-[312px] text-white text-base font-normal leading-normal">
                  Designing a financial future specifically for you step into
                  the realm of personalized investment excellence
                </p>
              </div>
              <div className="inline-flex justify-center items-center lg:gap-[20px] gap-5">
                <img
                  src={getToKnow}
                  alt="get to know"
                  className=" sm:h-[500px] h-[291px] pb-5"
                />
                <div class="flex flex-col justify-center items-center gap-10">
                  <img
                    src={experience}
                    alt="experience"
                    className="h-[120px] lg:w-[254px] lg:h-[261px]"
                  />
                  <img
                    src={interest}
                    alt="interest"
                    className="lg:w-[254px] lg:h-[261px] h-[110px] "
                  />
                </div>
              </div>
            </div>

            <div className="py-5 my-20 sm:flex justify-center items-center gap-28 rounded-sm ">
              <div>
                <img src={groupInvestment} alt="phone on large screen" />
              </div>
              <div className="ml-5 my-5">
                <img
                  src={layers}
                  alt="layer"
                  className="w-[50px] h-[30px] mt-10 "
                />
                <h2 className="my-8">Group Investment</h2>
                <p className="mb-8">
                  Dive into the power of collective growth with group
                  investments where shared success becomes our shared journey!
                </p>
                <img src={blackArrow} alt="blackArrow" className="" />
              </div>
            </div>

            {/* finish up */}
            <div className="bg-rose-800 py-14 px-4 lg:flex ">
              <div className="ml-14">
                <img src={dollar} alt="dollar" />
                <h2 className="text-white text-2xl font-semibold mt-3">
                  Dollar Investment
                </h2>
                <p className="text-white my-8">
                  Multiply your potential with dollar <br /> investments turning
                  individual dollars into <br /> a pathway for financial
                  growth!.
                </p>
                <img src={rightArrow} alt="rightArrow" className="pb-7" />
              </div>

              <div className="">
                <img src={DollarInvestment} alt="dollar investment feature" />
                {/* <div class="w-[874px] h-[538px] bg-stone-300 rounded-sm border-rose-100  "></div> */}
              </div>
            </div>
          </section>

          {/* faq */}
          <FAQ />
        </div>

        {/* footer */}
        <footer id="contact" className="bg-rose-800">
          <div className="container mx-auto py-10 flex flex-wrap justify-between items-center px-10">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <img src={logoWhite} className="w-24 h-auto" alt="Logo" />
              <h3 className="text-white leading-[1.6875rem] w-[297px]">
                A marketplace that sells various types of work by professional
                designers and is paid with NFT tokens.
              </h3>
            </div>
            <div className="inline-flex gap-10 lg:gap-40 pt-10">
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-bold leading-loose">About Us</h4>
                <p className="text-white text-xs font-normal leading-none">
                  About Us
                </p>
                <p className="text-white text-xs font-normal leading-none">
                  How It Works
                </p>
                <p className="text-white text-xs font-normal leading-none">
                  Our Services
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-bold leading-loose">
                  Community
                </h4>
                <p className="text-white text-xs font-normal leading-none">
                  Help Center
                </p>
                <p className="text-white text-xs font-normal leading-none">
                  Blog
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-bold leading-loose">
                  Social Media
                </h4>
                <p className="text-white text-xs font-normal leading-none">
                  Instagram
                </p>
                <p className="text-white text-xs font-normal leading-none">
                  Facebook
                </p>
                <p className="text-white text-xs font-normal leading-none">
                  Twitter
                </p>
              </div>
            </div>
          </div>
          <div className="text-white text-opacity-50 text-base font-normal block lg:flex justify-between px-10 pb-4 items-center">
            <div className="flex items-center gap-5 pb-2">
              <h3 className="text-white">Powered by</h3>
              <img src={alat} alt="alat logo" className="w-10" />
            </div>
            <h3 className="text-white pb-2">
              &copy; ALAT, Inc 2024. All rights reserved.
            </h3>
            <div className="flex gap-2 text-white">
              <h3>Privacy</h3>
              <h3>Security Terms</h3>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
