import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import OTPVerificationModal from "./OTPVerificationModal";
import eyeHideIcon from "../assets/eyeHideIcon.svg";
import eyeShowIcon from "../assets/eyeShowIcon.svg";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Function to check password conditions
  const isPasswordValid = (password) => {
    // Add your password conditions here
    // For example, at least 8 characters, one uppercase, one lowercase, one special character and one digit
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>.<,])(?=.{8,})/;
    return regex.test(password);
  };

  // handle signup
  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      setisLoading(true);
      // console.l;
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/register",

        values,
      );
      console.log("response", response);
      if (response.status === 200) {
        setUserEmail(values.email);
        setShowOTPModal(true);
      }
      setisLoading(false);
      setSubmitting(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast(error.response?.data?.message);
      } else if (error.response && error.response.status === 500) {
        toast(error.response?.data?.message);
      } else {
        console.log("error", error);
        toast.error("Something is wrong");
      }
      setisLoading(false);
      setSubmitting(false);
    }
  };

  // handle otp verification
  const handleOTPVerification = async (otp) => {
    try {
      setisLoading(true);
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/validate",
        { otp },
      );
      if (response.status === 200) {
        navigate("/signin");
      } else {
        toast.error(response?.data?.message);
      }
      setisLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast(error.response?.data?.message);
      } else {
        console.log("error", error);
        toast(error?.message);
      }
      setisLoading(false);
    }
  };

  const handleResendOTP = async (setOTP) => {
    try {
      setisLoading(true);
      if (!userEmail) {
        console.log("Email is empty");
        return;
      }
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/resend-otp",
        { email: userEmail },
      );
      if (response === 200) {
        setOTP(Array(6).fill(""));
        // If resend-OTP  successful, navigate to resendotp page
        navigate("/resendotp");
        // setShowOTPModal(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast(error.response?.data?.message);
      } else {
        console.log("error", error);
        toast(error?.message);
      }
      setisLoading(false);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          // First Name validation
          if (!values.firstName) {
            errors.firstName = "First name is required";
          }

          // Last Name validation
          if (!values.lastName) {
            errors.lastName = "Last name is required";
          }

          // Email validation
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          // Mobile Number validation
          if (!values.phoneNumber) {
            errors.phoneNumber = "Mobile number is required";
          } else if (!/^[0-9]{1,11}$/i.test(values.phoneNumber)) {
            errors.phoneNumber = "Invalid mobile number";
          }

          // Password validation
          if (!values.password) {
            errors.password = "Password is required";
          } else if (!isPasswordValid(values.password)) {
            errors.password =
              "Password must have at least 8 characters, one uppercase letter,one special character, one lowercase letter and one digit";
          }

          // Confirm Password validation
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, formikProps) => {
          handleSignUp(values, formikProps);
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit} className="">
            <div className="mb-2">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your first name"
                type="text"
                name="firstName"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.firstName}
              />
              {formikProps.errors.firstName &&
                formikProps.touched.firstName && (
                  <p className="text-red-300">{formikProps.errors.firstName}</p>
                )}
            </div>
            <div className="mb-2">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your last name"
                type="text"
                name="lastName"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.lastName}
              />
              {formikProps.errors.lastName && formikProps.touched.lastName && (
                <p className="text-red-300">{formikProps.errors.lastName}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your email address"
                type="email"
                name="email"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.email}
              />
              {formikProps.errors.email && formikProps.touched.email && (
                <p className="text-red-300">{formikProps.errors.email}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                Mobile Number <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your phone number"
                type="tel"
                name="phoneNumber"
                onChange={(e) => {
                  // Limit input to 11 characters
                  const inputValue = e.target.value.slice(0, 11);
                  formikProps.handleChange({
                    target: {
                      name: "phoneNumber",
                      value: inputValue,
                    },
                  });
                }}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.phoneNumber}
              />
              {formikProps.errors.phoneNumber &&
                formikProps.touched.phoneNumber && (
                  <p className="text-red-300">
                    {formikProps.errors.phoneNumber}
                  </p>
                )}
            </div>
            <div className="mb-2">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                  placeholder="Create your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.password}
                />
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

              {formikProps.errors.password && formikProps.touched.password && (
                <p className="text-red-300">{formikProps.errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="text-base font-semibold text-stone-950 text-opacity-50 ">
                Confirm Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full items-center justify-start rounded-sm border border-stone-950 border-opacity-25 bg-white px-6 py-3 text-sm font-semibold text-stone-950 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300"
                  placeholder="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent p-0"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <img src={eyeHideIcon} alt="showIcon" />
                  ) : (
                    <img src={eyeShowIcon} alt="showIcon" />
                  )}
                </button>{" "}
              </div>

              {formikProps.errors.confirmPassword &&
                formikProps.touched.confirmPassword && (
                  <p className="text-red-300">
                    {formikProps.errors.confirmPassword}
                  </p>
                )}
            </div>

            <button
              type="submit"
              disabled={formikProps.isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-gradient-to-b from-red-600 to-fuchsia-950 px-4 py-[10px] text-base font-semibold text-white"
            >
              {isLoading ? "Please wait..." : "Get Started"}
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        hideProgressBar={false}
        progress={undefined}
      />

      {/* OTP Verification Modal */}
      <OTPVerificationModal
        show={showOTPModal}
        isLoading={isLoading}
        onClose={() => setShowOTPModal(false)}
        onVerify={handleOTPVerification}
        onResend={() => handleResendOTP()}
      />
    </div>
  );
};

export default SignupForm;
