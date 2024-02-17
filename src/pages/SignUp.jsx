import React from "react";
// import backdrop from "../assets/background-backdrop.svg";
import Form from "../component/Form";
import logo from "../assets/landingPage/raiser.svg";
// import axios from "axios";

const SignUp = () => {
  return (
    <div>
      <div className="relative ">
        {/* <img
              src={backdrop}
              alt="side-backdrop"
              className="absolute w-[379px] h-[386px] right-0 top-0"
            /> */}

        {/* header */}
        <header className="flex flex-col items-center justify-center py-7">
          {/* add logo */}
          <img className="mb-5" src={logo} alt="logo" />

          <p className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] bg-clip-text text-2xl font-bold text-stone-950 text-transparent">
            Create an account
          </p>
          <p className="text-base font-normal text-stone-950">
            Sign up to Raiser
          </p>
        </header>

        {/* main content*/}
        <div className="mx-auto max-w-md rounded bg-white px-5 py-5 shadow-2xl">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
