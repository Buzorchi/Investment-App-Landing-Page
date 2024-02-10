import React, { useState } from "react";
import Menu from "../component/Menu";
import { Link } from "react-router-dom";
import all from "../assets/landingPage/allInOne.png";
import blackArrow from "../assets/landingPage/blackArrow.svg";
import dollar from "../assets/landingPage/dollar.svg";
import easy from "../assets/landingPage/easy.png";
import phone from "../assets/landingPage/phoneLg.png";
import layers from "../assets/landingPage/layers.svg";
import lightInbox from "../assets/landingPage/light_inbox.svg";
import line from "../assets/landingPage/line.svg";
import rightArrow from "../assets/landingPage/Arrow.svg";
import safety from "../assets/landingPage/safety.png";
import googleIcon from "../assets/landingPage/logos_google-play-icon.svg";
import appleIcon from "../assets/landingPage/apple-icon.svg";
import FAQ from "../component/FAQ";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="absolute">
      <nav className="navbar fixed top-0 w-full bg-white z-10 transition-all duration-700 py-2 px-5 border-b-2 border-neutral-100 justify-between items-center  inline-flex">
        <div className="justify- items-center gap-8 flex ">
          {/*menu*/}
          <Menu />
          {/* logo */}
          <img
            className="w-[84px] h-[31px] md:w-[185px] md:h-[61px] bg-zinc-300"
            src=""
            alt="logo"
          />
        </div>
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
        <Link
          to="/signin"
          className="px-3.5 py-2.5 sm:px-10 sm:py-4 bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm  text-white text-xs font-extrabold  leading- animate-pulse"
        >
          Get Started
        </Link>
      </nav>

      {/* main content */}
      <main>
        <div className="w-[90%] m-auto my-24">
          {/* home */}
          <section id="home" className="pt-10">
            <div className="text-center py-12  ">
              <h2 className="text-center text-rose-800 text-[32px] lg:text-6xl font-bold  leading-10  ">
                Simplified Investing Just <br /> for you.
              </h2>
              <p className="text-zinc-900 text-sm md:text-lg font-normal  my-8">
                Set out on your financial adventure with assurance, where
                maneuvering through the complexities of finance <br /> feels
                like a gentle breeze!
              </p>

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
              <p className="text-zinc-900 text-sm lg:text-base font-normal  my-8">
                Enjoy unbeatable convenience with our amazing services! We've
                got you covered with <br /> top-notch options, making sure
                everything fits your className effortlessly.
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
                <p className="text-zinc-900 text-sm lg:text-base font-normal leading-[27px] my-6">
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
                world of <br /> awesomeness waiting for you to explore and
                enjoy.
              </p>
              <img className="m-auto" src={line} alt="line" />
            </div>

            {/* not completed yet */}
            <div className="bg-rose-800 py-14  md:flex relative ">
              <div className="pl-28">
                <img src={lightInbox} alt="lightInbox" />
                <h2 className="text-white text-2xl font-semibold my-8">
                  Personalized Investment
                </h2>
                <p className="text-white my-8">
                  Designing a financial future specifically for you step into
                  the realm of personalized investment excellence
                </p>
                <img
                  src={rightArrow}
                  alt="rightArrow"
                  className="absolute bottom-14 left-28"
                />
              </div>
              <div className="w-[258.44px] h-[374px] mx-10 sm:mx-40 items-center gap-[20.12px] inline-flex">
                <img
                  src=""
                  alt="personalize img"
                  className="w-[119.16px] h-[181.77px]  bg-zinc-300 rounded-[0.86px] shadow border-rose-800"
                />
                <div className="w-[119.16px] h-[374px] flex-col justify-center items-start gap-[10.47px] inline-flex">
                  <img
                    src=""
                    alt="personalized img"
                    className="w-full h-[181.77px] bg-zinc-300 rounded-[0.86px] shadow border-rose-800"
                  />
                  <img
                    src=""
                    alt="personalized img"
                    className="w-full h-[181.77px] bg-zinc-300 rounded-[0.86px] shadow border-rose-800"
                  />
                </div>
              </div>
            </div>

            {/* Need to edit this code; group investment */}
            <div className="my-20 sm:flex justify-center items-center gap-28 bg-red-700 bg-opacity-5 rounded-sm  ">
              <div>
                {/* <img
                  className="m-auto mb-8 hidden"
                  src={phone}
                  alt="phone"
                /> */}
                <img
                  src={phone}
                  alt="phone on large screen"
                  className="sm:w-[344px] sm:h-[344px] "
                />
              </div>
              <div className="ml-5 my-5">
                <img src={layers} alt="layer" className="w-[50px] h-[30px] " />
                <h2 className="my-8">Group Investment</h2>
                <p className="mb-8">
                  Dive into the power of collective growth <br /> with group
                  investments where shared <br /> success becomes our shared
                  journey!
                </p>
                <img src={blackArrow} alt="blackArrow" className="" />
              </div>
            </div>

            <div className="bg-rose-800 py-14 px-4 sm:flex ">
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
                <img src={rightArrow} alt="rightArrow" />
              </div>

              <div className="">
                {/* <div class="w-[874px] h-[538px] bg-stone-300 rounded-sm border-rose-100  "></div> */}
              </div>
            </div>
          </section>
          <FAQ />
        </div>

        {/* footer */}
        <footer id="contact" className="bg-rose-800">
          <div className="container mx-auto py-8 flex flex-wrap gap-20 items-center px-10">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <img src="logo.png" className="w-24 h-auto" alt="Logo" />
              <p className="text-white text-sm font-normal leading-[1.6875rem] w-[297px]">
                A marketplace that sells various types of work by professional
                designers and is paid with NFT tokens.
              </p>
            </div>
            <div className="inline-flex gap-36 pt-10">
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
          <div className="text-white text-opacity-50 text-base font-normal flex justify-between px-10 pb-4 items-center gap-4">
            <span>Copyright &copy; 2024 Avesto</span>
            <div className="flex gap-2">
              <span>Privacy</span>
              <span>Security Terms</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
