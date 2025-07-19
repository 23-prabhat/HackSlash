import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const StartupDetails = () => {
  const [startupData, setStartupData] = useState({
    startupName: "",
    founder: "",
    teamSize: "",
    companyAddress: "",
    addressProof: null,
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setStartupData({ ...startupData, [name]: files[0] });
    } else {
      setStartupData({ ...startupData, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Startup Details Submitted:", startupData);
    navigate("/register/startup/documents"); 
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8 relative">
        {/* Progress Bar */}
        <div className="absolute top-4 right-4 w-32">
          <div className="text-sm text-gray-600 mb-1 text-right">Step 2 of 4</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "50%" }}></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Startup Details</h2>

        <form onSubmit={handleNext} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Startup Name</label>
            <input
              type="text"
              name="startupName"
              required
              value={startupData.startupName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Founder Name</label>
            <input
              type="text"
              name="founder"
              required
              value={startupData.founder}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Team Size</label>
            <input
              type="number"
              name="teamSize"
              required
              value={startupData.teamSize}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Company Address</label>
            <textarea
              name="companyAddress"
              required
              value={startupData.companyAddress}
              onChange={handleChange}
              rows={3}
              className="w-full border px-4 py-2 rounded-md"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Address Proof Upload (JPG/PDF/PNG)</label>
            <input
              type="file"
              name="addressProof"
              required
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Next Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartupDetails;
