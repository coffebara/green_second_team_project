import React, { useContext, useState } from "react";
import "./Test_login.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import Footer from "../components/Footer.js";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = createContext(null);

export default function Test_Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          // console.log(user);
          navigate("/");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const signInWithGoogle = () => {
    dispatch({ type: "LOGIN_START" });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };

  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // console.log(inputs);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="login">
          <form className="Login_form">
            <LockOutlinedIcon />
            <h2 className="Login_text">Login</h2>
            <div className="formInput">
              <input
                className="Login_input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="formInput">
              <input
                className="Login_input"
                type={inputType}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <div className="eyeIcon" onClick={handleToggle}>
                {toggleEye ? <Visibility /> : <VisibilityOff />}
              </div>
            </div>
            <button
              className="Login_button"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>

            <div className="formLink">
              <span>회원가입 </span>
              <Link
                to="/register"
                className="formSignup"
                style={{ textDecoration: "none" }}
              >
                {" "}
                SignUp
              </Link>{" "}
            </div>
            <span>비밀번호 찾기 </span>
            <Link
              to="/forget"
              className="formSignup"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Search
            </Link>
            <div className="line"></div>
            <div className="media-options">
              <Link
                to="#"
                className="facebook"
                style={{ textDecoration: "none" }}
              >
                <FacebookRounded className="facebookIcon" />
                <span>Login with Facebook</span>
              </Link>
            </div>
            <div className="media-options">
              <Link
                to="#"
                className="facebook google"
                style={{ textDecoration: "none" }}
                onClick={signInWithGoogle}
              >
                <img src="/assets/google.png" alt="" className="googleImg" />
                <span>Login with Google</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
