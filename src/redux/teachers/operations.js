import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";

export const getTeachers = createAsyncThunk(
  "teachers/fetchPaginated",
  async ({ startIndex = 0, limit = 4 }, { rejectWithValue }) => {
    try {
      const db = getDatabase();
      const dataRef = ref(db);
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        const allTeachers = Object.values(snapshot.val());
        const paginated = allTeachers.slice(startIndex, startIndex + limit);
        return paginated;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
