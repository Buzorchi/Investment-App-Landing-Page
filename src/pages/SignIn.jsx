import React, { useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import email from "../assets/codicon_mail (1).svg";
import password from "../assets/bx_bxs-lock-alt (1).svg";
import eyeHideIcon from "../assets/eyeHideIcon.svg";
import eyeShowIcon from "../assets/eyeShowIcon.svg";
import signupImg from "../assets/signup-img.png";
import logoWhite from "../assets/landingPage/raiserWhite.svg";
import alat from "../assets/landingPage/alat.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/login",
        {
          email: values.email,
          password: values.password,
        },
      );
      if (response.status !== 200) {
        console.log("Login failed", response.data.message);
        toast(error?.response?.data?.message);
        setError(response.data.message);
        setSubmitting(false);
        setLoading(false);
      }
      navigate("/");
    } catch (error) {
      console.log("Login failed", error);
      if (error.response && error.response.status === 401) {
        toast(error.response?.data?.message);
      } else {
        console.log("error", error);
        toast(error?.message);
      }
      setLoading(false);
      setSubmitting(false);
    }
  };
  return (
    <div>
      <div className="w-full md:flex">
        <div className="hidden flex-1 items-center justify-center bg-gradient-to-b from-red-600 to-fuchsia-950 md:flex">
          <div className="mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center pt-10">
            <img src={logoWhite} alt="logo" className="w-40" />
            <img src={alat} alt="alat logo" className="w-10 pt-5" />
            <img
              src={signupImg}
              alt="signup img"
              className="mt-5 h-[] w-[386px]"
            />
          </div>
        </div>
        <div className="bg-white pt-20 md:flex-1">
          <div className=" self-stretch">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start gap-2">
                <p className="mt-5 inline-block bg-gradient-to-r from-[#CD2128] to-[#490C3C] bg-clip-text text-[32px] font-bold text-transparent">
                  Hello Again!
                </p>
                <p className="pb-5 text-lg font-normal text-zinc-800 ">
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
                      values.email,
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
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start justify-start px-9 ">
                      <div className="flex flex-col items-center justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-5">
                          <div className="flex flex-col items-start justify-start gap-2">
                            {/* email */}
                            <div className="gap- flex flex-col items-start justify-start">
                              <label className="inline-block bg-gradient-to-r from-[#CD2128] to-[#490C3C] bg-clip-text text-base font-medium text-transparent ">
                                Email Address
                              </label>
                              <div className="relative">
                                <input
                                  className="w-[336px] rounded-sm border border-gray-600 border-opacity-50 px-16 py-2 text-base font-normal focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 md:w-[400px]"
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
                                    className="absolute top-2 ml-6 h-6 w-6 opacity-30"
                                  />
                                </div>
                              </div>
                              {errors.email && touched.email && (
                                <p className="text-red-700">{errors.email}</p>
                              )}
                            </div>

                            {/* password */}
                            <div className="flex flex-col items-start justify-start">
                              <label className="inline-block bg-gradient-to-r from-[#CD2128] to-[#490C3C] bg-clip-text text-base font-medium text-transparent outline-none ">
                                Password
                              </label>
                              <div className="relative">
                                <input
                                  className="w-[336px] rounded-sm border border-gray-600 border-opacity-50 px-16 py-2 text-base font-normal outline-none focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 md:w-[400px]"
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
                                    className="absolute top-2 ml-6 h-6 w-6 opacity-30"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent p-0"
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
                            className="inline-flex w-[336px] items-center justify-center rounded-sm bg-gradient-to-r from-[#CD2128] to-[#490C3C] p-2 text-base font-semibold text-white md:w-[400px]"
                          >
                            {loading ? "Please wait..." : "Login"}
                            {/* Login */}
                          </button>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-2">
                          <Link
                            to="/forgotpassword"
                            className="text-base font-normal text-zinc-900 opacity-70 "
                          >
                            Forgot Password ?
                          </Link>
                          <p>
                            <span className="text-base font-normal text-black text-opacity-70 ">
                              Don’t have an account yet?
                            </span>
                          </p>

                          <Link
                            to="/signup"
                            className="inline-block bg-gradient-to-r from-[#CD2128] to-[#490C3C] bg-clip-text text-base font-semibold text-transparent "
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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default SignIn;
