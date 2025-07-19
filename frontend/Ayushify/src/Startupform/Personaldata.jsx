import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartupPersonalInfo = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    aadharNumber: "",
    aadharFile: null,
    panFile: null,
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/register/startup/details"); 
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8 relative">
        {/* Progress Bar */}
        <div className="absolute top-4 right-4 w-32">
          <div className="text-sm text-gray-600 mb-1 text-right">Step 1 of 4</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "25%" }}></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Personal Information</h2>

        <form onSubmit={handleNext} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All input fields remain the same */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Aadhar Card Number</label>
            <input
              type="text"
              name="aadharNumber"
              required
              value={formData.aadharNumber}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Aadhar Card Upload (PDF/JPG/PNG)</label>
            <input
              type="file"
              name="aadharFile"
              accept=".pdf,.jpg,.jpeg,.png"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">PAN Card Upload (PDF/JPG/PNG)</label>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.jpeg,.png"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Residential Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              rows={3}
            ></textarea>
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

export default StartupPersonalInfo;
