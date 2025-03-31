import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: null,
  email: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => builder,
});

export const authReducer = authSlice.reducer;
