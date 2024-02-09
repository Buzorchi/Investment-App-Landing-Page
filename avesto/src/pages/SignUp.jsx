import React from "react";
import backdrop from "../assets/background-backdrop.svg";
import Form from "../component/Form";

const SignUp = () => {

  return (
    <div>
      <div className="w-full relative bg-white">
        <div className="w-[500px]  mx-auto my-20">
          <div>
            <img
              src={backdrop}
              alt="side-backdrop"
              className="absolute w-[379px] h-[386px] right-0 top-0"
            />
          </div>
          <div className="flex-col justify-start items-center gap-10 flex">
            {/* header */}
            <header className="flex-col justify-start items-center gap-4 flex">
              {/* add logo */}
              <img className="w-[100px] h-[100px] bg-zinc-300" alt="logo" />

              <p className="text-stone-950 text-2xl font-bold bg-gradient-to-r from-[#CD2128] to-[#490C3C] text-transparent bg-clip-text ">
                Create an account
              </p>
              <p className="text-stone-950 text-base font-normal ">
                Sign up to ---
              </p>
            </header>

            {/* main content*/}
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
