import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-rose-800">
          Dashboard Under Construction
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg text-center">
          Dear valued users, We're thrilled to have you on board our investment
          platform! Feel free to explore our comprehensive features
          and start your investment journey through our user-friendly landing
          page. From tracking investments to staying updated on market trends,
          we've got you covered every step of the way. Thank you for being part
          of our community. We're excited to embark on this prosperous journey
          together!
        </p>
        <Link
          to={"/"}
          className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] px-10 py-3 text-white text-lg"
        >
          Go to Landing Page
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
