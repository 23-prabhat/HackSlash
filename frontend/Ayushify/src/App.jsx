import './App.css';
import Home from './pages/Home';
import SignIn from './pages/signin';
import AdminLogin from './pages/Adminlogin';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import OfficialLogin from './pages/Officiallogin';

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
    }
    else if (role == "Official"){
      navigate("/official");
    }
  };

  // Hide Header on /auth and /admin
  const hideHeader = location.pathname === "/auth" || location.pathname === "/admin" || location.pathname === "/official";

  return (
    <>
      {!hideHeader && (
        <Header onNavigate={handleNavigate} onRoleSelect={handleRoleSelect} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/official" element={<OfficialLogin/>} />
      </Routes>
    </>
  );
}

export default App;
