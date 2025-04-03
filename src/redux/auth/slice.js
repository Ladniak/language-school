import { createSlice } from "@reduxjs/toolkit";
import { registerOp, loginOp, refreshOp } from "./operations";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerOp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loginOp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(refreshOp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshOp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
