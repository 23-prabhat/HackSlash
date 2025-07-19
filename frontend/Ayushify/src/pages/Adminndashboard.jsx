import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const savedSession = localStorage.getItem("ayushify_session");
    if (!savedSession) {
      navigate("/admin-dashboard");
    } else {
      const user = JSON.parse(savedSession);
      setUserData(user);
    }
  }, [navigate]);

  useEffect(() => {
    function generateChart() {
      const barChartContainer = document.getElementById("bar-chart");
      const data = [
        { month: "Jan", value: 65 },
        { month: "Feb", value: 59 },
        { month: "Mar", value: 80 },
        { month: "Apr", value: 81 },
        { month: "May", value: 56 },
        { month: "Jun", value: 95 },
      ];
      const maxValue = 100;

      barChartContainer.innerHTML = data
        .map((item) => {
          const barHeight = (item.value / maxValue) * 100;
          return `
            <div class="flex-1 flex flex-col items-center justify-end">
              <div class="chart-bar w-3/4 rounded-t-lg" style="height: 0%;" data-height="${barHeight}%"></div>
              <p class="text-sm mt-2 text-gray-600">${item.month}</p>
            </div>
          `;
        })
        .join("");

      setTimeout(() => {
        document.querySelectorAll(".chart-bar").forEach((bar) => {
          bar.style.height = bar.dataset.height;
        });
      }, 100);
    }

    generateChart();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("ayushify_session");
    navigate("/");
  };

  return (
    <div id="admin-dashboard-container" className="max-w-7xl mx-auto p-6 lg:p-8 fade-in-page">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="sanskrit-title text-4xl font-bold text-green-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            {userData ? `Welcome, Admin ${userData.email}` : "Administrator Portal"}
          </p>
        </div>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-gray-800 transition-colors"
          >
            {userData?.email?.charAt(0).toUpperCase() || "A"}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-10 py-2 border border-gray-200">
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-800">Signed in as</p>
                <p className="text-sm text-gray-600 truncate">{userData?.email}</p>
              </div>
              <div className="mt-2">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="#"
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </a>
            </div>
          )}
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <h3 className="font-bold text-gray-500 text-lg">Total Cases Cleared</h3>
            <p className="text-5xl font-bold text-green-800 mt-2">1,482</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <h3 className="font-bold text-gray-500 text-lg">Pending Admin Review</h3>
            <p className="text-5xl font-bold text-amber-600 mt-2">73</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <h3 className="font-bold text-gray-500 text-lg">Active Officers</h3>
            <p className="text-5xl font-bold text-blue-800 mt-2">26</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Monthly Clearance Rate</h3>
            <div id="bar-chart" className="h-64 flex items-end justify-around space-x-2"></div>
          </div>
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Review Applications</h3>
            <p className="text-center text-gray-600 mb-6">
              Review cases that have been processed and approved by portal officers.
            </p>
            <button className="btn-primary w-full py-3 rounded-lg font-semibold text-lg">
              View Pending Cases
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a href="#" className="hover:text-green-800 hover:underline">About AYUSHify</a>
          <a href="#" className="hover:text-green-800 hover:underline">Ministry of AYUSH</a>
          <a href="#" className="hover:text-green-800 hover:underline">Contact Us</a>
          <a href="#" className="hover:text-green-800 hover:underline">Terms of Service</a>
        </div>
        <p>&copy; 2025 AYUSHify Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
