import "../styles/reference.css";
import "../styles/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";
import Nav_Dark from "../components/Nav_Dark";
import LoginPage from "../Login/login/Login";
import Register from "../Login/register/Register";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/Banner";

function Login() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Home />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div>
      <div className="Login_main">
        <LoginPage />
        <Routes>
          <Route path="/register" element={<Register />} />

          {/* <Route path="/SignUp" element={<SignUp />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default Login;
