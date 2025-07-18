import './App.css';
import Home from './pages/Home';
import SignIn from './pages/signin';
import AdminLogin from './pages/Adminlogin';
import AdminDashboard from './pages/Admindashboard';
import OfficialLogin from './pages/Officiallogin';
import OfficialDashboard from './pages/Officialdashboard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import UserDashboard from './pages/Userdashboard';

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
    location.pathname === "/auth" ||
    location.pathname === "/admin" ||
    location.pathname === "/official" || 
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/user-dashboard";

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
        <Route path="/official-dashboard" element={<OfficialDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
