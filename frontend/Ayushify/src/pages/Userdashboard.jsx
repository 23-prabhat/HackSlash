import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedSession = localStorage.getItem("ayushify_session");
    if (!savedSession) {
      navigate("/dashboard");
    } else {
      setUserData(JSON.parse(savedSession));
    }
  }, [navigate]);

  const handleStartApplication = () => {
  navigate("/register/startup/personal");
};

  const handleLogout = () => {
    localStorage.removeItem("ayushify_session");
    navigate("/auth");
  };
  
const FAQS = [
  {
    q: "What is the Ministry of AYUSH?",
    a: "The Ministry develops education, research, and propagation of Ayurveda, Yoga & Naturopathy, Unani, Siddha, Sowa-Rigpa & Homeopathy."  /* :contentReference[oaicite:1]{index=1} */
  },
  {
    q: "What is AYUSH‑64?",
    a: "AYUSH‑64 is a poly‑herbal formulation originally for malaria, now repurposed for mild to moderate COVID‑19 as an adjunct therapy."  /* :contentReference[oaicite:2]{index=2} */
  },
  {
    q: "Which systems are covered under AYUSH?",
    a: "It covers Ayurveda, Yoga & Naturopathy, Unani, Siddha, Sowa‑Rigpa, and Homeopathy."  /* :contentReference[oaicite:3]{index=3} */
  },
  {
    q: "Is AYUSH‑64 scientifically proven?",
    a: "Clinical trials show it improves recovery in mild/moderate COVID‑19 when used alongside standard of care."  /* :contentReference[oaicite:4]{index=4} */
  }
];



  return (
    <div className="fade-in-page max-w-7xl mx-auto p-6 lg:p-8 font-[Lora] bg-[#F3EADF] text-[#4E342E] min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <p className="text-center text-gray-600 text-2xl font-semibold">
            Welcome back{userData && `, ${userData.email}`}!
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-green-900 transition-colors"
          >
            {userData?.email?.[0]?.toUpperCase() || "U"}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-10 py-2 border border-gray-200">
             <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-xs uppercase text-gray-500 font-semibold">Signed in as</p>
                      <p className="text-sm font-medium text-green-800 break-all">
                          {userData?.email || "user@example.com"}
                      </p>
                     </div>
                     <Chatbot />
              <div className="mt-2">
                <button className="w-full text-left flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Profile
                </button>
                <button className="w-full text-left flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Settings
                </button>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
                       >
                     Logout
                       </button>

            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Progress</h2>
          <p className="text-gray-600 mb-6">
            Not registered yet? register now by clicking the button below.
          </p>

          <div className="text-center">
           <button
                 onClick={handleStartApplication}
                 className="btn-primary px-8 py-3 rounded-lg font-semibold mt-8 text-lg bg-green-700 hover:bg-green-900 text-white shadow-md"
              >
                    Register Now
              </button>
          </div>
        </div>

        {/* Widgets */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-4">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Account Created</p>
                  <p className="text-sm text-gray-500">Welcome to AYUSHify!</p>
                </div>
              </li>
              <li className="flex items-center opacity-60">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  ?
                </span>
                <div>
                  <p className="font-semibold text-gray-600">Verify Email Address</p>
                  <p className="text-sm text-gray-500">Awaiting verification</p>
                </div>
              </li>
              <li className="flex items-center opacity-60">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  ?
                </span>
                <div>
                  <p className="font-semibold text-gray-600">Start Application</p>
                  <p className="text-sm text-gray-500">Awaiting first step</p>
                </div>
              </li>
            </ul>
          </div>
           <div>
      {open && (
        <div className="fixed bottom-20 right-6 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <h4 className="font-bold mb-2">AYUSH FAQ Bot</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {FAQS.map((item, idx) => (
              <details key={idx} className="border-b pb-2">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="text-sm mt-1">{item.a}</p>
              </details>
            ))}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-800 z-50"
        title="AYUSH FAQ"
      >
        ❓
      </button>
    </div>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Helpful Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-green-800 hover:underline">
                  📄 Document Checklist
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-green-800 hover:underline">
                  ❓ Registration FAQs
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-green-800 hover:underline">
                  📞 Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a href="#" className="hover:text-green-800 hover:underline">
            About AYUSHify
          </a>
          <a href="#" className="hover:text-green-800 hover:underline">
            Ministry of AYUSH
          </a>
          <a href="#" className="hover:text-green-800 hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:text-green-800 hover:underline">
            Terms of Service
          </a>
        </div>
        <p>&copy; 2025 AYUSHify Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}