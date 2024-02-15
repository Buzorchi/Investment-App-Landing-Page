import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import OTPVerificationModal from "./OTPVerificationModal";
import eyeHideIcon from "../assets/eyeHideIcon.svg";
import eyeShowIcon from "../assets/eyeShowIcon.svg";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    console.log(userEmail);
    setUserEmail(userEmail);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/register",
        values
      );
      if (response.status === 200) {
        setShowOTPModal(true);
      }
      setLoading(false);
      setSubmitting(false);
    } catch (error) {
      toast(error?.response?.data?.message);
      setLoading(false);
      setSubmitting(false);
    }
  };

  // handle otp verification
  const handleOTPVerification = async (otp) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/validate",
        { otp }
      );
      if (response.status === 200) {
        navigate("/signin");
      }
      setLoading(false);
    } catch (error) {
      toast(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    console.log(userEmail);
    setUserEmail(userEmail);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://bit-group-one-back-end.azurewebsites.net/api/User/resend-otp",
        { email: userEmail }
      );
      if (response === 200) {
        // If resend-OTP  successful, navigate to resendotp page
        navigate("/resendotp");
      }
    } catch (error) {
      toast(error?.response?.data?.message);
      setLoading(false);
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
        // onSubmit={handleSignUp}
        onSubmit={(values, formikProps) => {
          handleSignUp(values, formikProps);
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit} className="">
            <div className="mb-2">
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
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
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
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
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
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
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                Mobile Number <span className="text-red-700">*</span>
              </label>
              <input
                className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
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
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
                  placeholder="Create your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.password}
                />
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

              {formikProps.errors.password && formikProps.touched.password && (
                <p className="text-red-300">{formikProps.errors.password}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="text-stone-950 text-opacity-50 text-base font-semibold ">
                Confirm Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-6 py-3 bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-sm font-semibold focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300"
                  placeholder="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer"
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
              className="w-full px-4 py-[10px] bg-gradient-to-b from-red-600 to-fuchsia-950 rounded-sm justify-center items-center gap-2.5 inline-flex text-white text-base font-semibold"
            >
              {loading ? "Please wait..." : "Get Started"}
            </button>
          </form>
        )}
      </Formik>
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

      {/* OTP Verification Modal */}
      <OTPVerificationModal
        show={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerify={handleOTPVerification}
        onResend={() => handleResendOTP()}
        loading={loading}
        // resendingOTP={resendingOTP}
      />
    </div>
  );
};

export default Form;
