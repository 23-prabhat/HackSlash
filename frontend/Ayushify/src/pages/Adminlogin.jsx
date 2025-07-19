import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin logged in successfully");

    // ✅ Save session (optional)
    localStorage.setItem("ayushify_session", JSON.stringify({ email: form.email }));

    // ✅ Navigate to admin dashboard
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Admin Login</h2>
        
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Admin Email"
          required
          className="mb-4 w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="mb-6 w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        
        <button
          type="submit"
          className="w-full bg-green-700 text-white p-3 rounded-md hover:bg-green-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
