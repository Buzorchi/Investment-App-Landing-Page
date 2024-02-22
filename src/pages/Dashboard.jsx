import React from "react";
import { Link } from "react-router-dom";
import inProgress from "../assets/Progress_1.avif";

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
      </div>
    </>
  );
};

export default Dashboard;
