import React from "react";
import Menu from "../component/Menu";
import { Link } from "react-router-dom";
import all from "../assets/landingPage/allInOne.png";
import blackArrow from "../assets/landingPage/blackArrow.svg";
import dollar from "../assets/landingPage/dollar.svg";
import easy from "../assets/landingPage/easy.png";
import phone from "../assets/landingPage/phone.svg";
import layers from "../assets/landingPage/layers.svg";
import lightInbox from "../assets/landingPage/light_inbox.svg";
import line from "../assets/landingPage/line.svg";
import rightArrow from "../assets/landingPage/Arrow.svg";
import safety from "../assets/landingPage/safety.png";
import sideimg1 from "../assets/landingPage/sideimg1.png";
import siderimg2 from "../assets/landingPage/signimg2.svg";
import FAQ from "../component/FAQ";

const LandingPage = ({ embedId }) => {
  return (
    <div className="absolute">
      <nav className="navbar fixed top-0 w-full bg-white z-10 transition-all duration-300 py-2 px-5 border-b-2 border-neutral-100 justify-between items-center  inline-flex">
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
          {/* <NavLink
            to="#home"
            className="text-base text-black font-normal leading-[27px]"
            activeClassName="font-bold leading-loose text-rose-800 active"
          >
            Home
          </NavLink> */}

          <a
            href="#home"
            className="text-base text-black font-normal leading-[27px] active:font-bold active:leading-loose active:text-rose-800"
          >
            Home
          </a>
          <a
            href="#whyAvesto"
            className="text-base text-black font-normal leading-[27px] active:font-bold active:leading-loose active:text-rose-800"
          >
            Why Avesto
          </a>

          {/* <NavLink
            to="#whyAvesto"
            className="text-base text-black font-normal leading-[27px]"
            activeClassName="font-bold leading-loose text-rose-800 active"
          >
            Why Avesto?
          </NavLink> */}

          {/* <NavLink
            to="#features"
            className="text-base text-black font-normal leading-[27px]"
            activeClassName="font-bold leading-loose text-rose-800 active"
          >
            Features
          </NavLink> */}
          <a
            href="#features"
            className="text-base text-black font-normal leading-[27px] active:font-bold active:leading-loose active:text-rose-800"
          >
            Feature
          </a>

          <a
            href="#faq"
            className="text-base text-black font-normal leading-[27px] active:font-bold active:leading-loose active:text-rose-800"
          >
            FAQ
          </a>

          {/* <NavLink
            to="#faq"
            className="text-base text-black font-normal leading-[27px]"
            activeClassName="font-bold leading-loose text-rose-800 active"
          >
            FAQ
          </NavLink> */}

          <a
            href="#contact"
            className="text-base text-black font-normal leading-[27px] active:font-bold active:leading-loose active:text-rose-800"
          >
            Get in Touch
          </a>
          {/* 
          <NavLink
            to="#contact"
            className="text-base text-black font-normal leading-[27px]"
            activeClassName="font-bold leading-loose text-rose-800 active"
          >
            Get in Touch
          </NavLink> */}
        </nav>
        <button className="px-3.5 py-2.5 sm:px-10 sm:py-4 bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm  text-white text-xs font-extrabold  leading-tight">
          Download App
        </button>
      </nav>

      {/* main content */}
      <main>
        <div className="w-[90%] m-auto my-24">
          {/* home */}
          <section id="home" className="h-[]">
            <div className="text-center py-12  ">
              <h2 className="text-center text-rose-800 text-[32px] lg:text-6xl font-bold  leading-10  ">
                Simplified Investing Just <br /> for you.
              </h2>
              <p className="text-zinc-900 text-sm md:text-lg font-normal  my-8">
                Set out on your financial adventure with assurance, where
                maneuvering through the complexities of finance <br /> feels
                like a gentle breeze!
              </p>

              <Link
                to="/signin"
                className="text-xs lg:text-xl mt-4 px-4 py-2 font-bold text-white bg-gradient-to-br from-red-600 to-fuchsia-950 rounded-sm "
              >
                Get Started
              </Link>
            </div>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[372px]"
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* why avesto */}
          <section id="whyAvesto" className="">
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
              <div className="p-5 bg-white shadow">
                <img src={safety} alt="safety" />
                <h2 className="font-medium my-8">Guarantee Safety</h2>
                <p className="font-normal leading-[27px">
                  Prioritizes security security with cutting-edge tech and
                  strict regulations. Your security is addressed with advanced
                  data encryption, regulatory compliance, and fraud protection.
                </p>
              </div>

              <div className="p-5 bg-white shadow">
                <img src={all} alt="all" />
                <h2 className="font-medium my-8">All in One App</h2>
                <p>
                  Tailored for young Nigerians, offers an all-in-one experience
                  — from seamless transactions and educational resources to
                  diverse investment options, empowering your financial journey.
                </p>
              </div>

              <div className="p-5 bg-white shadow">
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
                <div className="p-5 bg-white shadow">
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

                <div className="p-5 bg-white shadow">
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

                <div className="p-5 bg-white shadow">
                  <img src={easy} alt="easy" />
                  <h2 className="font-medium text-2xl my-8">Minimal Risk</h2>
                  <p>
                    Unlock low-risk, high-reward vibes! Avesto is your ticket to
                    financial growth with minimal risks. Dive into smart
                    investments tailored for you – secure, steady, and thriving.
                  </p>
                </div>

                <div className="p-5 bg-white shadow">
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
          <section id="features">
            <div className="my-10 text-center">
              <h2 className="text- sm:text-5xl leading-loose">
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
            <div className="my-20 sm:flex ">
              <div>
                <img className="m-auto mb-8" src={phone} alt="phone" />
              </div>
              <div>
                <img src={layers} alt="layer" />
                <h2 className="my-8">Group Investment</h2>
                <p className="mb-20">
                  Dive into the power of collective growth with group
                  investments where shared success becomes our shared journey!
                </p>
                <img src={blackArrow} alt="blackArrow" />
              </div>
            </div>

            <div className="bg-rose-800 py-14 px-4">
              <div>
                <img src={dollar} alt="dollar" />
                <h2 className="text-white text-2xl font-semibold my-8">
                  Dollar Investment
                </h2>
                <p className="text-white my-8">
                  Multiply your potential with dollar investments turning
                  individual dollars into a pathway for financial growth!.
                </p>
                <img src={rightArrow} alt="rightArrow" />
              </div>
            </div>
          </section>
          <FAQ />
        </div>

        {/* coming back to update this code; footer */}
        <section id="contact">
          <div className="w-full h-[527px] py-8 bg-rose-800 flex-col justify-center items-center gap-16 inline-flex">
            <div className="px-4 flex-col justify-start items-start gap-16 flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[150px] h-14 bg-zinc-300"></div>
                <div className="w-[312px] text-white text-base font-normal  leading-[27px]">
                  A marketplace that sells various types of work by professional
                  designers and is paid with NFT tokens.
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-[52px] inline-flex">
                <div className="justify-start items-start gap-10 flex">
                  <div className="w-[78px] h-36 relative">
                    <div className="left-0 top-[128px] absolute text-white text-xs font-normal  leading-none">
                      How It Works
                    </div>
                    <div className="left-0 top-[88px] absolute text-white text-xs font-normal  leading-none">
                      Our Services
                    </div>
                    <div className="w-[78px] left-0 top-[48px] absolute text-white text-xs font-normal  leading-none">
                      About Us
                    </div>
                    <div className="left-0 top-0 absolute text-white text-sm font-bold  leading-loose">
                      About Us
                    </div>
                  </div>
                  <div className="w-[74px] h-[104px] relative">
                    <div className="left-0 top-[88px] absolute text-white text-xs font-normal  leading-none">
                      Blog
                    </div>
                    <div className="left-0 top-[48px] absolute text-white text-xs font-normal  leading-none">
                      Help Center
                    </div>
                    <div className="left-[1px] top-0 absolute text-white text-sm font-bold  leading-loose">
                      Community
                    </div>
                  </div>
                </div>
                <div className="w-[104px] h-36 relative">
                  <div className="w-[104px] left-0 top-[48px] absolute text-white text-xs font-normal  leading-none">
                    Instagram
                  </div>
                  <div className="w-[104px] left-0 top-[88px] absolute text-white text-xs font-normal  leading-none">
                    Facebook
                  </div>
                  <div className="w-[104px] left-0 top-[128px] absolute text-white text-xs font-normal  leading-none">
                    Twitter
                  </div>
                  <div className="left-[1px] top-0 absolute text-white text-sm font-bold  leading-loose">
                    Social Media
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-[67px] inline-flex">
              <div className="text-white text-opacity-50 text-xs font-normal ">
                Copyright @2024 Avesto
              </div>
              <div>
                <span className="text-neutral-100 text-xs font-normal  leading-[38px]">
                  Privacy
                </span>
                <span className="text-stone-50 text-xs font-normal  leading-[38px]">
                  {" "}
                  Security Terms
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
