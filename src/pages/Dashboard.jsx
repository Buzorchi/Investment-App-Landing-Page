import React from "react";
import { Link } from "react-router-dom";
import inProgress from "../assets/Progress_1.avif";
import raiser from "../assets/app/app-debug.apk";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-rose-800">
          Dashboard Under Construction
        </h1>
        <img src={inProgress} alt="Work in progress" className="w-1/4" />
        <Link
          to={"/"}
          className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] px-2 py-2 text-white text-md"
        >
          Go to Landing Page
        </Link>

        <a
          href={raiser}
          download
          className="inline-flex px-2 py-2 mt-4 items-center justify-center gap-5 rounded-[5px] bg-zinc-900 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 "
        >
          <div className="inline-flex flex-col items-start justify-start text-white">
            <p className="text-xs font-normal leading-3 text-white  ">
              Download for Andriod
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Dashboard;
