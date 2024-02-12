import React from "react";
// import backdrop from "../assets/background-backdrop.svg";
import Form from "../component/Form";
import logo from "../assets/landingPage/raiser.svg";
// import axios from "axios";

const SignUp = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [otp, setOtp] = useState('');
  // const [error, setError] = useState('');

  // const handleGetStarted = asyn () => {
  //   try {
  //     const response = await axios.post("api");
  //     if (response.status === 200){
  //       setShowModal(true)
  //     }else {
  //       setError (response)
  //     }
  //   }
  // }

  return (
    <div>
      <div className="relative ">
        {/* <img
              src={backdrop}
              alt="side-backdrop"
              className="absolute w-[379px] h-[386px] right-0 top-0"
            /> */}

        {/* header */}
        <header className="flex flex-col justify-center items-center py-7">
          {/* add logo */}
          <img className="mb-5" src={logo} alt="logo" />

          <p className="text-stone-950 text-2xl font-bold bg-gradient-to-r from-[#CD2128] to-[#490C3C] text-transparent bg-clip-text ">
            Create an account
          </p>
          <p className="text-stone-950 text-base font-normal ">
            Sign up to ---
          </p>
        </header>

        {/* main content*/}
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded px-5 py-5">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
