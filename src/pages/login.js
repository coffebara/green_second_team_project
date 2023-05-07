// import "../styles/reference.css";
// import "../styles/Nav.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route } from "react-router-dom";
// import Nav_Dark from "../components/Nav_Dark";
// import LoginPage from "../Login/login/Login";
// import Register from "../Login/register/Register";
// // import SignUp from "../components/SignUp";

// function Login() {
//   return (
//     <div>
//       <Nav_Dark />
//       <div className="Login_main">
//         <LoginPage />
//         <Routes>
//           <Route path="/register" element={<Register />} />

//           {/* <Route path="/SignUp" element={<SignUp />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Nav_Dark from "../components/Nav_Dark";
import LoginPage from "../Login/login/Login";
import Register from "../Login/register/Register";

function Login() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <div>
      <Nav_Dark />
      <div className="Login_main">
        <LoginPage />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
