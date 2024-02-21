import React, { useRef, useState } from "react";

const OTPVerificationModal = ({
  show,
  onClose,
  onVerify,
  onResend,
}) => {
  const [otp, setOTP] = useState(Array(6).fill(""));
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const inputsRef = useRef([]);

  let otpString;

  const handleVerifyOTP = () => {
    // Basic validation for OTP
    otpString = otp.join("");

    if (!otpString) {
      setError("Please enter the OTP.");
      return;
    }

    // Pass the entered OTP back to the parent component for verification
    onVerify(otpString);
  };

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOTP(newOtp);

    // Move to the next input field
    if (event.target.value !== "" && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move to the previous input field
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }

    if (event.key === "Backspace" && otp[index] === ""){
      const newOtp = [...otp];
      newOtp[index] = "";
      setOTP(newOtp)
    }
  };

  const handleResendOTP = () =>{
    setOTP(Array(6).fill(""));
    onResend()
  }

  return (
    <div className={`modal ${show ? "block" : "hidden"}`}>
      <div className="modal-overlay fixed inset-0 z-50 bg-gray-900 opacity-50"></div>
      <div className="modal-container  fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto rounded-md bg-white p-8 shadow-lg">
        <div className="modal-content">
          <div className="modal-header relative pb-10">
            <button
              onClick={onClose}
              className="absolute right-0 text-gray-600 hover:text-gray-800 focus:outline-none "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-10">
              <h3 className="text-center text-base font-semibold leading-normal text-zinc-900">
                Please enter the One-Time Password send to your email to Verify
                your account
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                maxLength="1"
                value={otp[0]}
                onChange={(event) => handleChange(0, event)}
                onKeyDown={(event) => handleKeyDown(0, event)}
                ref={(input) => (inputsRef.current[0] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
              <input
                type="text"
                maxLength="1"
                value={otp[1]}
                onChange={(event) => handleChange(1, event)}
                onKeyDown={(event) => handleKeyDown(1, event)}
                ref={(input) => (inputsRef.current[1] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
              {/* input 2 */}
              <input
                type="text"
                maxLength="1"
                value={otp[2]}
                onChange={(event) => handleChange(2, event)}
                onKeyDown={(event) => handleKeyDown(2, event)}
                ref={(input) => (inputsRef.current[2] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
              {/* input 3 */}
              <input
                type="text"
                maxLength="1"
                value={otp[3]}
                onChange={(event) => handleChange(3, event)}
                onKeyDown={(event) => handleKeyDown(3, event)}
                ref={(input) => (inputsRef.current[3] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
              {/* input 4 */}
              <input
                type="text"
                maxLength="1"
                value={otp[4]}
                onChange={(event) => handleChange(4, event)}
                onKeyDown={(event) => handleKeyDown(4, event)}
                ref={(input) => (inputsRef.current[4] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
              {/* input 5 */}
              <input
                type="text"
                maxLength="1"
                value={otp[5]}
                onChange={(event) => handleChange(5, event)}
                onKeyDown={(event) => handleKeyDown(5, event)}
                ref={(input) => (inputsRef.current[5] = input)}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
              />
            </div>

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          </div>
          <div className="modal-footer flex items-center justify-center pt-10 ">
            <button
              onClick={handleVerifyOTP}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gradient-to-br from-red-600 to-fuchsia-950 px-4 py-2 text-white hover:bg-red-700 focus:outline-none"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
          <h3 class="mt-10 flex items-center justify-center font-semibold text-zinc-900">
           {` Didn’t get the OTP?{" "}`}
            <button className="text-red-700" onClick={handleResendOTP}>
              Resend OTP
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
