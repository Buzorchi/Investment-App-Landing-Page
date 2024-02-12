import React, { useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import email from "../assets/codicon_mail (1).svg";
import password from "../assets/bx_bxs-lock-alt (1).svg";
import eyeHideIcon from "../assets/eyeHideIcon.svg";
import eyeShowIcon from "../assets/eyeShowIcon.svg";
import signupImg from "../assets/signup-img.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://69c8-155-93-95-78.ngrok-free.app/api/User/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.status !== 200) {
        console.log("Login failed", response.data.message);
        setError(response.data.message);
        setSubmitting(false);
        return;
      }
      navigate("/");
      console.log("response from login", response.data);
    } catch (error) {
      console.error("Login failed", error);
      setError("An error occurred while logging in.");
      setSubmitting(false);
    }
  };
  return (
    <div>
      <div className="w-full  md:flex">
        <div className="hidden md:flex flex-1 bg-gradient-to-b from-red-600 to-fuchsia-950 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-screen max-w-screen-xl mx-auto">
            <img
              src=""
              alt="logo"
              className="w-[146px] h-[72px] bg-white mt-10"
            />
            <img
              src={signupImg}
              alt="signup img"
              className="w-[386px] h-[390px] mt-14"
            />
          </div>
        </div>
        <div className="md:flex-1 bg-white pt-10">
          <div className=" self-stretch">
            {/* logo */}
            <img className="w-[72px] h-[72px] m-auto bg-zinc-300" alt="logo" />

            <div className="flex-col justify-start items-center flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <p className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] inline-block text-transparent bg-clip-text text-[32px] font-bold mt-5">
                  Hello Again!
                </p>
                <p className="text-zinc-800 text-lg font-normal pb-5 ">
                  Welcome Back
                </p>
              </div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={handleLogin}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex-col justify-start items-start flex px-9 ">
                      <div className="flex-col justify-start items-center gap-2 flex">
                        <div className="flex-col justify-start items-start gap-5 flex">
                          <div className="flex-col justify-start items-start gap-2 flex">
                            {/* email */}
                            <div className="flex-col justify-start items-start gap- flex">
                              <label className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] inline-block text-transparent bg-clip-text text-base font-medium ">
                                Email Address
                              </label>
                              <div className="relative">
                                <input
                                  className="w-[336px] md:w-[400px] px-16 py-2 rounded-sm border border-gray-600 border-opacity-50 focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300 text-base font-normal"
                                  placeholder="Email Address"
                                  type="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                ></input>
                                <div>
                                  <img
                                    src={email}
                                    alt=""
                                    className="w-6 h-6 absolute opacity-30 top-2 ml-6"
                                  />
                                </div>
                              </div>
                              {errors.email && touched.email && (
                                <p className="text-red-700">{errors.email}</p>
                              )}
                            </div>

                            {/* password */}
                            <div className="flex-col justify-start items-start flex">
                              <label className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] inline-block text-transparent bg-clip-text text-base font-medium outline-none ">
                                Password
                              </label>
                              <div className="relative">
                                <input
                                  className="w-[336px] md:w-[400px] px-16 py-2 rounded-sm border border-gray-600 border-opacity-50 focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300 text-base font-normal outline-none"
                                  placeholder="Password"
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                ></input>
                                <div>
                                  <img
                                    src={password}
                                    alt=""
                                    className="w-6 h-6 absolute opacity-30 top-2 ml-6"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <img src={eyeHideIcon} alt="showIcon" />
                                  ) : (
                                    <img src={eyeShowIcon} alt="showIcon" />
                                  )}
                                </button>
                              </div>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </div>
                          </div>
                          <div>
                            {errors && <p className="text-red-500">{error}</p>}
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] w-[336px] md:w-[400px] p-2 text-white text-base font-semibold rounded-sm justify-center items-center inline-flex"
                          >
                            Login
                          </button>
                        </div>
                        <div className="flex-col justify-start items-center gap-2 flex">
                          <Link
                            to=""
                            className="opacity-70 text-zinc-900 text-base font-normal "
                          >
                            Forgot Password ?
                          </Link>
                          <p>
                            <span className="text-black text-opacity-70 text-base font-normal ">
                              Don’t have an account yet?
                            </span>
                          </p>

                          <Link
                            to="/signup"
                            className="bg-gradient-to-r from-[#CD2128] to-[#490C3C] inline-block text-transparent bg-clip-text text-base font-semibold "
                          >
                            {" "}
                            Create account
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
