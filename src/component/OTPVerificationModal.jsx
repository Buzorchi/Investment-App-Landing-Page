import React, { useState } from "react";

const OTPVerificationModal = ({ show, onClose, onVerify }) => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState(null);

  const handleVerifyOTP = () => {
    // Basic validation for OTP
    if (!otp.trim()) {
      setError("Please enter the OTP.");
      return;
    }

    // Pass the entered OTP back to the parent component for verification
    onVerify(otp.trim());
  };

  return (
    <div className={`modal ${show ? "block" : "hidden"}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container fixed top-0 left-0 right-0 bottom-0 mx-auto h-full w-full max-w-md p-8 z-50 overflow-y-auto bg-white shadow-lg rounded-md">
        <div className="modal-content">
          <div className="modal-header flex justify-between items-center pb-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">Verify OTP</h3>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <label className="block text-sm font-semibold">Enter OTP</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          </div>
          <div className="modal-footer flex justify-end pt-4 border-t border-gray-300">
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
