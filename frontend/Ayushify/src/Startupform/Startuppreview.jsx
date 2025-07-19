import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const StartupPreview = ({ formData, onSubmitFinal }) => {
  const [agreed, setAgreed] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      console.log("Final Submission Data:", formData);
      onSubmitFinal(); // optional callback
      setSuccessMessage(true);

      // ✅ Navigate to /dashboard after 3 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } else {
      alert("Please agree to the declaration before submitting.");
    }
  };

  const getFileName = (file) => (file ? file.name : "Not uploaded");

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8 relative">
        {/* Progress Bar */}
        <div className="absolute top-4 right-4 w-32">
          <div className="text-sm text-gray-600 mb-1 text-right">Step 4 of 4</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Preview & Submit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div><strong>Company PAN Card:</strong> {getFileName(formData.companyPan)}</div>
          <div><strong>Electricity Bill:</strong> {getFileName(formData.electricityBill)}</div>

          <div><strong>Food Related:</strong> {formData.isFoodRelated ? "Yes" : "No"}</div>
          {formData.isFoodRelated && (
            <div><strong>FSSAI Certificate:</strong> {getFileName(formData.fssaiCert)}</div>
          )}

          <div><strong>Bank Account:</strong> {formData.bankAccount}</div>
          <div><strong>IFSC Code:</strong> {formData.ifsc}</div>

          <div><strong>Cancelled Cheque:</strong> {getFileName(formData.cancelCheque)}</div>
          <div><strong>Company Type:</strong> {formData.companyType}</div>

          <div><strong>AYUSH License:</strong> {getFileName(formData.ayushLicense)}</div>
        </div>

        {/* Declaration */}
        <div className="mt-6">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <span>
              I hereby confirm that the information provided is true to the best of my knowledge and
              I agree to the terms and conditions.
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Go Back
          </button>

          <button
            onClick={handleFinalSubmit}
            className={`px-6 py-2 rounded-md text-white ${
              agreed ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!agreed}
          >
            Submit Registration
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            🎉 You have been <strong>successfully registered!</strong><br />
            All further notifications will be sent to you on your profile page.
            <br />
            <span className="text-sm text-gray-600">Redirecting to dashboard...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupPreview;
