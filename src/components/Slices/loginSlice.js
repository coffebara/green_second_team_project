// import { createSlice } from "@reduxjs/toolkit";

// let login = createSlice({
//   name: "login",
//   initialState: { isLogin: false },
//   reducers: {
//     loginToggle(state, action) {
//       state.isLogin = action.payload;
//       console.log("기본값: " + state.isLogin + " 변경 값: " + action.payload);
//     },
//     logoutToggle(state) {
//       state.isLogin = false;
//       console.log("로그아웃됨");
//       console.log("기본값: " + state.isLogin);
//     },
//   },
// });

// export const { loginToggle, logoutToggle } = login.actions;
// export default login.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

export const loginWithEmail = createAsyncThunk(
  "login/loginWithEmail",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "login/logout",
  async (_, { rejectWithValue }) => {
    try {
      await auth.signOut();
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = auth.currentUser;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
