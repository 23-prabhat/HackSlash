import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartupDocuments = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    companyPan: null,
    electricityBill: null,
    isFoodRelated: false,
    fssaiCert: null,
    bankAccount: "",
    ifsc: "",
    cancelCheque: null,
    companyType: "",
    ayushLicense: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Startup Documents Data:", formData);
    navigate("/register/startup/preview");
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8 relative">
        {/* Progress Bar */}
        <div className="absolute top-4 right-4 w-32">
          <div className="text-sm text-gray-600 mb-1 text-right">Step 3 of 4</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Startup Documents Details
        </h2>

        <form onSubmit={handleNext} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PAN Card */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Company PAN Card (jpg/pdf/png)</label>
            <input
              type="file"
              name="companyPan"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Electricity Bill */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">
              Light Bill of Company Address (jpg/pdf/png)
            </label>
            <input
              type="file"
              name="electricityBill"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Food Related Checkbox */}
          <div className="md:col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="isFoodRelated"
              checked={formData.isFoodRelated}
              onChange={handleChange}
              id="foodCheckbox"
            />
            <label htmlFor="foodCheckbox" className="font-medium">
              Is your startup food/product related? (FSSAI Certificate required)
            </label>
          </div>

          {/* FSSAI Certificate (Conditional) */}
          {formData.isFoodRelated && (
            <div className="md:col-span-2">
              <label className="block font-medium mb-1">FSSAI Certification (jpg/pdf/png)</label>
              <input
                type="file"
                name="fssaiCert"
                accept=".jpg,.jpeg,.png,.pdf"
                required={formData.isFoodRelated}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          )}

          {/* Bank Account Number */}
          <div>
            <label className="block font-medium mb-1">Company Bank Account Number</label>
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* IFSC Code */}
          <div>
            <label className="block font-medium mb-1">IFSC Code</label>
            <input
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Cancelled Cheque */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Cancelled Cheque (jpg/pdf/png)</label>
            <input
              type="file"
              name="cancelCheque"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Company Type (Radio Buttons) */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Company Type</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="product"
                  onChange={handleChange}
                  required
                />
                Product Based
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="service"
                  onChange={handleChange}
                  required
                />
                Service Based
              </label>
            </div>
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

export default StartupDocuments;
