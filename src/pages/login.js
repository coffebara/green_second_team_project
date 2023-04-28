import "../styles/reference.css";
import "../styles/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Nav_Dark from "../components/Nav_Dark";
import LoginPage from "../components/login";
import Register from "../components/register";
import SignUp from "../components/SignUp";

function Login() {
  return (
    <div>
      <Nav_Dark />
      <div className="Login_main">
        <LoginPage />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
