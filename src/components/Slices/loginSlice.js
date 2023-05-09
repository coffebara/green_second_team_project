import { createSlice } from "@reduxjs/toolkit";

let login = createSlice({
  name: "login",
  initialState: { isLogin: false },
  reducers: {
    loginToggle(state, action) {
      state.isLogin = action.payload;
      console.log("기본값: " + state.isLogin + " 변경 값: " + action.payload);
    },
    logoutToggle(state) {
      state.isLogin = false;
      console.log("로그아웃됨");
      console.log("기본값: " + state.isLogin);
    },
  },
});

export const { loginToggle, logoutToggle } = login.actions;
export default login.reducer;
