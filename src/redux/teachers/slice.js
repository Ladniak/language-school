import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const savedFavourites =
  JSON.parse(localStorage.getItem("favouriteTeachers")) || [];

const initialState = {
  teachers: null,
  isLoading: false,
  error: null,
  favouriteTeachers: savedFavourites,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: initialState,
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
  },
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

export const { toggleFavourite } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
