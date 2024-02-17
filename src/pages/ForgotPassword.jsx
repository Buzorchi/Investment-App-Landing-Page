import React from "react";
import passwordImg from "../assets/forgotPassword/forgotPassword.png";

const ForgotPassword = () => {
  return (
    <>
      <div className="mx-auto w-full py-40 text-center lg:flex lg:py-0">
        <div className="hidden flex-1 lg:flex">
          <img src={passwordImg} alt="forgot password imgage" />
        </div>

        {/* form */}
        <div className="m-auto w-[400px] lg:flex-1">
          <h2 className="bg-gradient-to-b from-red-600 to-fuchsia-950 bg-clip-text pb-4 font-semibold text-transparent">
            Forgot Password?
          </h2>
          <p className="pb-4">
            Enter your email and we’ll send you a reset password link
          </p>
          <div className="pb-4 ">
            <input
              type="text"
              className="w-[80%] rounded-sm  border border-gray-600 border-opacity-50 py-2 text-base font-normal focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 md:w-[400px]"
              placeholder="Enter your email address"
            />
          </div>
          <button className="w-[80%] rounded-sm bg-gradient-to-b  from-red-600 to-fuchsia-950 p-2 text-white md:w-[400px] ">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
