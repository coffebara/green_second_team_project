// import { createContext, useEffect, useReducer } from "react";
// import AuthReducers from "./AuthReducer";
// import { useDispatch } from "react-redux";
// import { loginToggle } from '../store'

// const INITIAL_STATE = {
//   currentUser: JSON.parse(localStorage.getItem("user")) || null,
//   isLoading: false,
//   error: false,
//   isLogin:false,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const dispatchStore = useDispatch();
//   const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE);

//   useEffect(() => {
//     let newLoginToggle = state.isLogin
//     dispatchStore(loginToggle(newLoginToggle))
//     localStorage.setItem("user", JSON.stringify(state.currentUser));
//   }, [state.currentUser]);
//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser: state.currentUser,
//         isLoading: state.isLoading,
//         error: state.error,
//         isLogin: state.isLogin,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useReducer } from "react";
import AuthReducers from "./AuthReducer";
import { useDispatch } from "react-redux";
import { loginToggle } from "../store";
import { auth } from "../firebase"; // Firebase SDK를 임포트합니다.

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: false,
  isLogin: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const dispatchStore = useDispatch();
  const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE);

  // useEffect(() => {
  //   // Firebase 인증 구독을 추가하여 사용자 정보가 변경될 때마다 상태를 업데이트합니다.
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch({ type: "LOGIN_SUCCESS", payload: user });
  //     } else {
  //       dispatch({ type: "LOGOUT" });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    let newLoginToggle = state.isLogin;
    dispatchStore(loginToggle(newLoginToggle));
  }, [state.isLogin]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        isLoading: state.isLoading,
        error: state.error,
        isLogin: state.isLogin,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
