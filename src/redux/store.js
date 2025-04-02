import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { teachersReducer } from "./teachers/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: teachersReducer,
  },
});

export default store;
