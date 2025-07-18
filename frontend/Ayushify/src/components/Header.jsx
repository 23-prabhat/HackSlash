import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openRoleModal = () => {
    setIsModalOpen(true);
    const modal = document.getElementById("header-role-modal");
    if (modal) modal.showModal();
    document.body.classList.add("blur-background");
  };

  const closeRoleModal = () => {
    setIsModalOpen(false);
    const modal = document.getElementById("header-role-modal");
    if (modal) modal.close();
    document.body.classList.remove("blur-background");
  };

  const handleRoleSelect = (role) => {
    closeRoleModal();
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <>
      <div className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={openRoleModal}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Select Role
        </motion.button>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-green-700 font-semibold hover:underline"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-green-700 font-semibold hover:underline"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-green-700 font-semibold hover:underline"
          >
            Contact
          </button>
        </div>
      </div>

      <dialog
        id="header-role-modal"
        className="rounded-xl p-6 bg-white shadow-xl w-[90%] max-w-sm text-center z-50 backdrop:backdrop-blur-sm"
      >
        <h2 className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
          Select Your Role
        </h2>
        <div className="flex flex-col gap-3 text-2xl font-semibold mb-6 text-green-700">
          {["User", "Admin", "Official"].map((role) => (
            <button
              key={role}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              onClick={() => handleRoleSelect(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <button
          onClick={closeRoleModal}
          className="mt-6 text-sm text-gray-600 hover:text-red-500"
        >
          Cancel
        </button>
      </dialog>
    </>
  );
}
