import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/signin';
import AdminLogin from './pages/Adminlogin';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import OfficialLogin from './pages/Officiallogin';
import StartupPersonalInfo from './Startupform/Personaldata';
import StartupDetails from './Startupform/Startupinfo';
import StartupDocuments from './Startupform/Startupdocuments';
import StartupPreview from './Startupform/Startuppreview';
import UserDashboard from './pages/Userdashboard';
import AdminDashboard from './pages/Adminndashboard';
import OfficialDashboard from './pages/Officialdashboard';


function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const navigate = useNavigate();
  const location = useLocation();

 
  const [startupFormData, setStartupFormData] = React.useState({
    name: "",
    dob: "",
    age: "",
    aadharNumber: "",
    aadharFile: null,
    panFile: null,
    mobile: "",
    address: "",
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

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleRoleSelect = (role) => {
    if (role === "User") {
      navigate("/auth");
    } else if (role === "Admin") {
      navigate("/admin");
    } else if (role === "Official") {
      navigate("/official");
    }
  };

  
  const hideHeader =
    ["/auth", "/admin", "/official", "/dashboard",
     "/register/startup/personal",
     "/register/startup/details",
     "/register/startup/documents",
     "/register/startup/preview",
     "/admin-dashboard", "/official-dashboard",
     "/admin", "/official"
    ].includes(location.pathname);

  return (
    <>
      {!hideHeader && (
        <Header onNavigate={handleNavigate} onRoleSelect={handleRoleSelect} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/official" element={<OfficialLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/official-dashboard" element={<OfficialDashboard />} />

        
        <Route
          path="/register/startup/personal"
          element={<StartupPersonalInfo formData={startupFormData} setFormData={setStartupFormData} />}
        />
        <Route
          path="/register/startup/details"
          element={<StartupDetails formData={startupFormData} setFormData={setStartupFormData} />}
        />
        <Route
          path="/register/startup/documents"
          element={<StartupDocuments formData={startupFormData} setFormData={setStartupFormData} />}
        />
        <Route
          path="/register/startup/preview"
          element={
            <StartupPreview
              formData={startupFormData}
              onSubmitFinal={() => console.log("Startup form submitted")}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
