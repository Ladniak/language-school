import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const savedFavourites =
  JSON.parse(localStorage.getItem("favouriteTeachers")) || [];

const initialState = {
  teachers: [],
  isLoading: false,
  error: null,
  favouriteTeachers: savedFavourites,
  loadedCount: 0,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const teacher = action.payload;
      const exists = state.favouriteTeachers.find(
        (fav) => fav.id === teacher.id
      );

      if (exists) {
        state.favouriteTeachers = state.favouriteTeachers.filter(
          (fav) => fav.id !== teacher.id
        );
      } else {
        state.favouriteTeachers.push(teacher);
      }
      localStorage.setItem(
        "favouriteTeachers",
        JSON.stringify(state.favouriteTeachers)
      );
    },
    resetTeachers: (state) => {
      state.teachers = [];
      state.loadedCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = [...state.teachers, ...action.payload];
        state.loadedCount += action.payload.length;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavourite, resetTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
