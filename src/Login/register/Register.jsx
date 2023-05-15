// import React, { useContext, useState } from "react";
// import FormInput from "../../components/formInput/FormInput";
// import { Link, useNavigate } from "react-router-dom";
// import "./register.scss";
// import { FacebookRounded } from "@mui/icons-material";
// import { auth, provider } from "../../firebase";
// import {
//   updateProfile,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { AuthContext } from "../../context/AuthContext";
// import Nav_Light from "../../components/Nav_Light";
// import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

// const Register = () => {
//   const { dispatch } = useContext(AuthContext);
//   const [inputValues, setInputValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const navigate = useNavigate();
//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "사용자 이름을 영문자로 3~16자여야하며 특수문자를 포함해서는 안됩니다.",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "유효한 이메일 주소여야 합니다",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "password",
//       type: "text",
//       placeholder: "Password",
//       errorMessage:
//         "비밀번호는 8-20자 사이이며, 적어도 1개의 문자, 1개의 숫자, 1개의 특수 문자를 포함해야 합니다.",
//       pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 4,
//       name: "confirmPassword",
//       type: "text",
//       placeholder: "Confirm Password",
//       errorMessage: "입력하신 비밀번호와 같지 않습니다",
//       pattern: inputValues.password,
//       required: true,
//     },
//   ];

//   const handleChange = (e) => {
//     setInputValues({ ...inputValues, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         inputValues.email,
//         inputValues.password
//       ).then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         updateProfile(user, {
//           displayName: inputValues.username,
//         });
//         navigate("/login");
//       });
//     } catch (error) {}
//   };

//   const signInWithGoogle = () => {
//     dispatch({ type: "LOGIN_START" });

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//         // The signed-in user info.
//         const user = result.user;
//         dispatch({ type: "LOGIN_SUCCESS", payload: user });
//         navigate("/");
//       })
//       .catch((error) => {
//         dispatch({ type: "LOGIN_FAILURE" });
//       });
//   };
//   // console.log(inputValues);

//   return (
//     <div>
//       <Nav_Light />
//       <div className="register">
//         <form>
//           <LockOutlinedIcon />
//           <h2>Register</h2>
//           {inputs.map((input) => (
//             <FormInput
//               key={input.id}
//               {...input}
//               value={inputValues[input.name]}
//               onChange={handleChange}
//             />
//           ))}
//           <button type="submit" onClick={handleRegister}>
//             Register
//           </button>

//           <div className="formLink">
//             <span>이미 아이디가 있나요? </span>
//             <Link
//               to="/login"
//               className="formSignup"
//               style={{ textDecoration: "none" }}
//             >
//               {" "}
//               SignIn
//             </Link>
//           </div>

//           <div className="line"></div>
//           <div className="media-options">
//             <Link
//               to="#"
//               className="facebook"
//               style={{ textDecoration: "none" }}
//             >
//               <FacebookRounded className="facebookIcon" />
//               <span>Login with Facebook</span>
//             </Link>
//           </div>
//           <div className="media-options">
//             <Link
//               to="#"
//               className="facebook google"
//               style={{ textDecoration: "none" }}
//               onClick={signInWithGoogle}
//             >
//               <img src="/assets/google.png" alt="" className="googleImg" />
//               <span>Login with Google</span>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { FacebookRounded } from "@mui/icons-material";
import { auth, provider } from "../../firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import ReactSwitch from "react-switch";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { createContext } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

export const ThemeContext = createContext(null);
export default function Register() {
  const { dispatch } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "사용자 이름을 영문자로 3~16자여야하며 특수문자를 포함해서는 안됩니다.",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "유효한 이메일 주소여야 합니다",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "비밀번호는 8-20자 사이이며, 적어도 1개의 문자, 1개의 숫자, 1개의 특수 문자를 포함해야 합니다.",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "입력하신 비밀번호와 같지 않습니다",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
        navigate("/login");
      });
    } catch (error) {}
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
  // console.log(inputValues);
  let state = useSelector((state) => state);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const imageStyle = {
    width: 100,
    height: 25,
    filter: theme === "dark" ? "invert(100%)" : "none",
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="Nav_Theme">
          <Navbar>
            <Container>
              <Navbar.Brand href="/home" className="Nav_Toggletheme">
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  style={imageStyle}
                />
              </Navbar.Brand>
              <Nav>
                <div className="Nav_Switch">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    className="mt-2"
                  />
                </div>
                <Nav.Link
                  onClick={() => {
                    navigate("/class");
                  }}
                  className="Nav_Toggletheme"
                >
                  강의
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/reference");
                  }}
                  className="Nav_Toggletheme"
                >
                  레퍼런스
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate(`${state.login.isLogin ? "/checkout" : "/login"}`);
                  }}
                  className="Nav_Toggletheme"
                >
                  {state.login.isLogin ? "로그아웃" : "로그인"}
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className="Nav_Toggletheme"
                >
                  장바구니
                  <Badge className="ms-2" bg="secondary">
                    0
                  </Badge>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="register">
          <form className="Register_form">
            <LockOutlinedIcon />
            <h2 className="Register_text">Register</h2>
            {inputs.map((input) => (
              <FormInput
                className="Register_input"
                key={input.id}
                {...input}
                value={inputValues[input.name]}
                onChange={handleChange}
              />
            ))}
            <button
              className="Register_button"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>

            <div className="formLink">
              <span>이미 아이디가 있나요? </span>
              <Link
                to="/login"
                className="formSignup"
                style={{ textDecoration: "none" }}
              >
                {" "}
                SignIn
              </Link>
            </div>

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
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
