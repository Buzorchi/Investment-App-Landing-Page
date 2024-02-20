import React from "react";
import { Link  } from "react-router-dom";
import FAQ from "../component/FAQ";
import all from "../assets/landingPage/allInOne.png";
import blackArrow from "../assets/landingPage/blackArrow.svg";
import easy from "../assets/landingPage/easy.png";
import finIcon from "../assets/landingPage/Icon.svg";
import layers from "../assets/landingPage/layers.svg";
import lightInbox from "../assets/landingPage/light_inbox.svg";
import line from "../assets/landingPage/line.svg";
import rightArrow from "../assets/landingPage/Arrow.svg";
import safety from "../assets/landingPage/safety.png";
import chart from "../assets/landingPage/chart.svg";
import layer from "../assets/landingPage/grommet-icons_resources.svg";
import wallet from "../assets/landingPage/wallet-check.svg";
import uiphone from "../assets/landingPage/guidance_ui-phone.svg";
import googleIcon from "../assets/landingPage/logos_google-play-icon.svg";
import appleIcon from "../assets/landingPage/apple-icon.svg";
import groupInvestment from "../assets/landingPage/groupinvestment.png";
import getToKnow from "../assets/landingPage/Get to know 1.svg";
import experience from "../assets/landingPage/Experience 1.svg";
import interest from "../assets/landingPage/Interest.png";
import screen from "../assets/landingPage/DollarInvestment.svg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const LandingPage = () => {
  
  return (
    <div className="">
      <Navbar/>
      {/* main content */}
      <main>
        <div className="mx-auto my-11 w-[90%] lg:my-24">
          {/* home */}
          <section id="home" className="">
            <div className="py-12 text-center  ">
              <h2 className="text-center text-[32px] font-bold leading-10 text-rose-800  lg:text-6xl  ">
                Simplified Investing Just <br /> for you.
              </h2>
              <h2 className=" my-8 text-base font-normal text-zinc-900 md:text-lg">
                Set out on your financial adventure with assurance, where
                maneuvering through the complexities of finance <br /> feels
                like a gentle breeze!
              </h2>

              <Link to="/">
                <div className="flex justify-center gap-5">
                  <button className="inline-flex h-[62.07px] w-[178.81px] items-center justify-center gap-5 rounded-[5px] bg-zinc-900 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <img src={googleIcon} alt="" />
                    <div className="inline-flex flex-col items-start justify-start text-white">
                      <p className="text-xs font-normal leading-3 text-white  ">
                        Get it on
                      </p>
                      <span className="font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </button>
                  <button className="inline-flex h-[62.07px] w-[178.81px] items-center justify-center gap-5 rounded-[5px] bg-zinc-900 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <img src={appleIcon} alt="" />
                    <div className="inline-flex flex-col items-start justify-start text-white">
                      <p className="text-xs font-normal leading-3 text-white  ">
                        Download on the
                      </p>
                      <span className="font-semibold leading-tight">
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
                className="h-[372px] w-full"
                src={`https://www.youtube.com/embed/${"0kwl10ftLm0"}`}
                alt="Video on financial "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* why Raiser */}
          <section id="whyRaiser" className="pt-10">
            <div className="py-12 text-center ">
              <h2 className="text-center text-[32px] leading-10 lg:text-5xl">
                Our Best Services <br /> For Your Convenience.
              </h2>
              <p className="my-8 text-base font-normal text-zinc-900  lg:text-base">
                Enjoy unbeatable convenience with our amazing services! We've
                got you covered with <br /> top-notch options, making sure
                everything fits your className effortlessly.
              </p>
              <img className="mx-auto" src={line} alt="line" />

              {/* side images */}
              {/* <div className="">
                <img src={sideimg1} alt="sideimg" className="absolute" />
                <img src={siderimg2} alt="sideimg" className="absolute" />
              </div> */}
            </div>

            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white">
                <img src={safety} alt="safety" />
                <h2 className="my-8 font-medium">Guarantee Safety</h2>
                <p className="leading-[27px font-normal">
                  Prioritizes security security with cutting-edge tech and
                  strict regulations. Your security is addressed with advanced
                  data encryption, regulatory compliance, and fraud protection.
                </p>
              </div>

              <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src={all} alt="all" />
                <h2 className="my-8 font-medium">All in One App</h2>
                <p>
                  Tailored for young Nigerians, offers an all-in-one experience
                  — from seamless transactions and educational resources to
                  diverse investment options, empowering your financial journey.
                </p>
              </div>

              <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src={easy} alt="easy" />
                <h2 className="my-8 font-medium">Easy to Use</h2>
                <p>
                  Designed with young Nigerians in mind. Enjoy an effortlessly
                  intuitive experience, easy navigation, smart features, and a
                  wealth of financial opportunities at your fingertips.
                </p>
              </div>
            </div>
            <section>
              <div className="my-10 text-center">
                <h2 className="text-center text-[32px] leading-10 lg:text-5xl">
                  These are reasons why you should use <br /> Raiser
                </h2>
                <p className="my-6 text-base font-normal leading-[27px] text-zinc-900 lg:text-base">
                  Unlock and secure your financial potential here!
                </p>
                <img className="mx-auto" src={line} alt="line" />
              </div>
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <img src={chart} alt="chart" />
                  <h2 className="my-8 text-2xl font-medium">
                    Diversified Investment
                  </h2>
                  <p className="leading-[27px font-normal">
                    Elevate your wealth game! Raiser offers a vibrant mix,
                    helping young Nigerians diversify smartly for a brighter,
                    more resilient financial future. Dare to diversify, thrive
                    together!
                  </p>
                </div>

                <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <img src={layer} alt="layer" />
                  <h2 className="my-8 text-2xl  font-medium">
                    Educational Resources
                  </h2>
                  <p>
                    Empower your future! Raiser not only grows your wealth but
                    also equips you with financial education resources,
                    empowering young Nigerians to make informed decisions and
                    thrive financially.
                  </p>
                </div>

                <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <img src={wallet} alt="wallet" />
                  <h2 className="my-8 text-2xl font-medium">Minimal Risk</h2>
                  <p>
                    Unlock low-risk, high-reward vibes! Raiser is your ticket to
                    financial growth with minimal risks. Dive into smart
                    investments tailored for you – secure, steady, and thriving.
                  </p>
                </div>

                <div className="hoever:bg-white bg-white p-5 shadow transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <img src={uiphone} alt="uiphone" />
                  <h2 className="my-8 text-2xl font-medium">
                    User-Friendly Interface:
                  </h2>
                  <p>
                    Unlock low-risk, high-reward vibes! Raiser is your ticket to
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
              <h2 className="text-center text-[32px] leading-10 sm:text-5xl">
                Unlock a World of Incredible Features
              </h2>
              <p className="my-8">
                Open the doors to amazing vibes and dope features! Experience a
                world of awesomeness waiting for you to explore and enjoy.
              </p>
              <img className="mx-auto" src={line} alt="line" />
            </div>
            {/* not completed */}
            <div className="flex flex-col items-center justify-center gap-10 bg-rose-800 lg:flex-row lg:justify-around">
              <div className="pl-10 pt-5">
                <img src={lightInbox} alt="lightInbox" />
                <h2 className=" py-10 font-semibold leading-[55.50px] text-white">
                  Personalized Investment
                </h2>
                <p className="w-[312px] text-base font-normal leading-normal text-white">
                  Designing a financial future specifically for you step into
                  the realm of personalized investment excellence
                </p>
              </div>
              <div className="-ml-12 inline-flex items-center justify-center gap-5 lg:gap-[20px]">
                <img
                  src={getToKnow}
                  alt="get to know"
                  className=" h-[291px] pb-5 sm:h-[500px]"
                />
                <div className="flex flex-col items-center justify-center gap-10">
                  <img
                    src={experience}
                    alt="experience"
                    className="h-[120px] lg:h-[261px] lg:w-[254px]"
                  />
                  <img
                    src={interest}
                    alt="interest"
                    className="h-[110px] lg:h-[261px] lg:w-[254px] "
                  />
                </div>
              </div>
            </div>

            <div className="my-20 items-center justify-center gap-28 rounded-sm py-5 sm:flex ">
              <div>
                <img src={groupInvestment} alt="phone on large screen" />
              </div>
              <div className="my-5 ml-5">
                <img
                  src={layers}
                  alt="layer"
                  className="mt-10 h-[30px] w-[50px] "
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
            <div className="bg-rose-800 px-10 py-14 lg:flex ">
              <div className="">
                <img src={finIcon} alt="financial literacy icon" />
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Financial Literacy
                </h2>
                <p className="my-8 text-white">
                  Unlock financial freedom in the palm of your hand! Take charge
                  of your future. Start learning, start earning!
                </p>
                <img src={rightArrow} alt="rightArrow" className="pb-7" />
              </div>

              <div className="">
                <img
                  src={screen}
                  alt="dollar investment feature"
                  className=""
                />
              </div>
            </div>
          </section>
          <FAQ />
        </div>
       <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
