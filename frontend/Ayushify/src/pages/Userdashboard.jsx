import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserDashboard = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [startupType, setStartupType] = useState(""); // product or service
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaar: null,
    pan: null,
    utilityBill: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleRegisterClick = () => {
    setStartupType(""); // clear any previous selection
    setShowForm(false);
    setIsRegistered(false);
  };

  const handleStartupTypeSelect = (type) => {
    setStartupType(type);
    setShowForm(true);
    setIsRegistered(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setShowForm(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      {/* Header */}
      <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to User Dashboard</h1>
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-3xl text-gray-600" />
          <div>
            <p className="font-semibold">{formData.name || "Your Name"}</p>
            <p className="text-sm text-gray-500">{formData.email || "Email"}</p>
          </div>
          <button
            onClick={handleEditToggle}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
          >
            {isEditing ? "Close Edit" : "Edit"}
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-300 h-2 mt-4 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: isRegistered ? "100%" : "0%" }}
        ></div>
      </div>

      {/* Show Register or Resume */}
      {!startupType && !showForm && (
        <div className="mt-10 text-center">
          <button
            onClick={handleRegisterClick}
            className={`px-6 py-3 text-white font-semibold rounded ${
              isRegistered ? "bg-blue-500" : "bg-green-500"
            }`}
          >
            {isRegistered ? "Resume" : "Register"}
          </button>

          {/* New Option: Product or Service */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">
              Select Startup Nature:
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleStartupTypeSelect("Product-based")}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Product-based
              </button>
              <button
                onClick={() => handleStartupTypeSelect("Service-based")}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Service-based
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile */}
      {isEditing && (
        <div className="mt-6 bg-white p-4 rounded shadow max-w-lg mx-auto">
          <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
        </div>
      )}

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white p-6 rounded shadow max-w-2xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">
            {startupType} Startup Registration
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <div className="mb-3">
            <label className="block font-medium mb-1">Upload Aadhaar Card</label>
            <input
              type="file"
              name="aadhaar"
              accept=".jpg,.png,.pdf"
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium mb-1">Upload PAN Card</label>
            <input
              type="file"
              name="pan"
              accept=".jpg,.png,.pdf"
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium mb-1">
              Upload Utility Bill (Electricity/Gas)
            </label>
            <input
              type="file"
              name="utilityBill"
              accept=".jpg,.png,.pdf"
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-4 rounded"
          >
            Submit Registration
          </button>
        </form>
      )}
    </div>
  );
};

export default UserDashboard;
