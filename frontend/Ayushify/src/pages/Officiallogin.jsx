import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

export default function OfficialLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Official Login:", form);
    
    // Simulate success (replace this with real login logic later)
    alert("Login Successful");
    navigate("/official-dashboard"); // ✅ Navigate after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-cyan-200 to-blue-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 p-4"
      >
        <h2 className="text-2xl font-bold text-center">Official Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Official Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300 focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
