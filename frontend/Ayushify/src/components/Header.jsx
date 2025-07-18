import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header({ onNavigate, onRoleSelect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRoleModal = () => setIsModalOpen(true);
  const closeRoleModal = () => setIsModalOpen(false);

  const handleRoleSelect = (role) => {
    closeRoleModal();
    onRoleSelect(role);
  };

  return (
    <>
      <div className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
        <button
          onClick={openRoleModal}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition transform hover:scale-105"
        >
          Select Role
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => onNavigate("/")}
            className="text-green-700 font-semibold hover:underline"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("/about")}
            className="text-green-700 font-semibold hover:underline"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("/contact")}
            className="text-green-700 font-semibold hover:underline"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Role Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-sm text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              Select Your Role
            </h2>
            <div className="flex flex-col  gap-3 mb-6">
              {["User", "Admin", "Official"].map((role) => (
                <button
                  key={role}
                  className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 backdrop-blur-{sm} rounded-lg font-semibold transition transform hover:scale-105"
                  onClick={() => handleRoleSelect(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            <button
              onClick={closeRoleModal}
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
