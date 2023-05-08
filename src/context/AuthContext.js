import { createContext, useEffect, useReducer } from "react";
import AuthReducers from "./AuthReducer";
import { useDispatch } from "react-redux";
import { loginToggle } from '../store'

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: false,
  isLogin:false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const dispatchStore = useDispatch();
  const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE);
  
  useEffect(() => {
    let newLoginToggle = state.isLogin
    dispatchStore(loginToggle(newLoginToggle))
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);
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
