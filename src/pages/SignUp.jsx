import React from "react";
import { Link } from "react-router-dom";
// import backdrop from "../assets/background-backdrop.svg";
import logo from "../assets/landingPage/raiserWhite.svg";
import SignupForm from "../component/SignupForm";
const SignUp = () => {
  return (
    <div>
      <div className="relative bg-rose-800 ">
        {/* <img
              src={backdrop}
              alt="side-backdrop"
              className="absolute w-[379px] h-[386px] right-0 top-0"
            /> */}

        {/* header */}
        <header className="flex flex-col items-center justify-center py-7 ">
          <img className="mb-5 w-[150px]" src={logo} alt="logo" />
        </header>

        {/* main content*/}
        <div className="mx-auto max-w-md rounded bg-white px-5 py-5 shadow-2xl">
          <SignupForm />
        </div>
        <div className="flex flex-col justify-center items-center py-5">
          <p className="text-white">
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
