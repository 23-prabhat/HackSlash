import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Account created successfully! Navigating to user dashboard");
    navigate("/user-dashboard");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Sign in successful! Navigating to dashboard");
    navigate("/user-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-teal-200 to-blue-200">
      {/* Card container with transition */}
      <div className="relative w-[660px] max-w-full min-h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* SignUp Form */}
        <div className={`absolute top-0 w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-1000 ease-in-out ${
          isActive ? "left-1/2 opacity-100 z-20" : "left-0 opacity-0 z-10"
        }`}>
          <h1 className="text-2xl font-semibold text-gray-800">Create Account</h1>
          <span className="text-sm text-gray-600 mt-4">Enter your details to register</span>

          <input type="text" placeholder="Name" className="mt-5 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="email" placeholder="Email" className="mt-2 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="tel" placeholder="Mobile number" className="mt-2 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="password" placeholder="Password" className="mt-2 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <button onClick={handleSignUp} className="mt-6 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition w-full">
            Sign Up
          </button>
        </div>

        {/* SignIn Form */}
        <div className={`absolute top-0 w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-1000 ease-in-out ${
          isActive ? "left-1/2 opacity-0 z-0" : "left-0 opacity-100 z-20"
        }`}>
          <h1 className="text-2xl font-semibold text-gray-800">Sign In</h1>
          <span className="text-sm text-gray-600 mt-4">Enter your registered email</span>

          <input type="email" placeholder="Email" className="mt-10 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="password" placeholder="Password" className="mt-2 p-3 w-full bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-green-500" required />
          <a href="#" className="text-sm text-gray-600 mt-3 hover:text-green-700 transition block">Forgot your password?</a>
          <button onClick={handleSignIn} className="mt-5 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition w-full">
            Sign In
          </button>
        </div>

        {/* Right Side Greeting */}
        <div className={`absolute top-0 w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white transition-all duration-1000 ease-in-out ${
          isActive ? "left-0 rounded-tl-3xl rounded-bl-3xl" : "left-1/2 rounded-tr-3xl rounded-br-3xl"
        }`}>
          <div className="text-center px-8">
            <h1 className="text-2xl font-semibold mb-4">
              {isActive ? "Welcome Back!" : "Hello There!"}
            </h1>
            <p className="text-sm mb-8 leading-relaxed">
              {isActive ? "Enter your personal details to sign in to your account" : "Register with your details to start your journey with AYUSHify"}
            </p>
            <button 
              onClick={() => setIsActive(!isActive)} 
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105"
            >
              {isActive ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
