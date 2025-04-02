import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const initialState = {
  teachers: null,
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
