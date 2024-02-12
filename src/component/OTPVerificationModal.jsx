import React, { useRef, useState } from "react";

const OTPVerificationModal = ({ show, onClose, onVerify }) => {
  const [otp, setOTP] = useState("", "", "", "", "", "");
  const [error, setError] = useState(null);
  const inputsRef = useRef([]);

  const handleVerifyOTP = () => {
    // Basic validation for OTP
    if (!otp.trim()) {
      setError("Please enter the OTP.");
      return;
    }

    // Pass the entered OTP back to the parent component for verification
    onVerify(otp.trim());
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
      <div className="modal-overlay bg-gray-900 opacity-50"></div>
      <div className="modal-container fixed top-48 bottom-32 left-0 right-0 mx-auto  max-w-md p-8 z-50 overflow-y-auto bg-white shadow-lg rounded-md">
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
                Please enter the One-Time Password to Verify your account
              </h3>
            </div>
              <div>
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
      {/* Repeat this for the remaining input fields */}
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
            />
              </div>
            

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          </div>
          <div className="modal-footer flex justify-end pt-4">
            <button
              onClick={handleVerifyOTP}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
