import React, { useRef, useState } from "react";

const OTPVerificationModal = ({ show, onClose, onVerify, onResend}) => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
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
  };

 return (
    <div className={`modal ${show ? "block" : "hidden"}`}>
      <div className="modal-overlay bg-gray-900 opacity-50 fixed inset-0 z-50"></div>
      <div className="modal-container  fixed w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md p-8 z-50 overflow-y-auto bg-white shadow-lg rounded-md">
        <div className="modal-content">
          <div className="modal-header pb-10 relative">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none absolute right-0 "
            >
              <svg
                className="w-6 h-6"
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
              <h3 className="text-center text-zinc-900 text-base font-semibold leading-normal">
                Please enter the One-Time Password send to your email to Verify
                your account
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          </div>
          <div className="modal-footer flex justify-center items-center pt-10 ">
            <button
              onClick={handleVerifyOTP}
              className="w-full px-4 py-2 bg-gradient-to-br from-red-600 to-fuchsia-950 justify-center items-center gap-2.5 inline-flex text-white rounded-md hover:bg-red-700 focus:outline-none"
            >
              {loading ? "Verifying..." : "Verify"}
              {/* Verify */}
            </button>
          </div>
          <h3 class="text-zinc-900 font-semibold mt-10 flex justify-center items-center">
            Didn’t get the OTP?{" "}
            <button
              className="text-red-700"
              onClick={onResend}
            >
              Resend OTP
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
