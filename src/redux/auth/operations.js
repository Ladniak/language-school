import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "./slice";

export const registerOp = createAsyncThunk(
  "auth/registerOp",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName });

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error) {
      console.error("Firebase error:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const loginOp = createAsyncThunk(
  "auth/loginOp",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshOp = createAsyncThunk(
  "auth/refreshOp",
  async (_, { dispatch }) => {
    const auth = getAuth();

    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
        } else {
          dispatch(setUser(null));
        }
        resolve();
      });
    });
  }
);
