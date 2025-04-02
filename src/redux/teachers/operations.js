import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";

// export const getTeachers = createAsyncThunk("teachers/fetchAll", async () => {
//   try {
//     const database = getDatabase();
//     const dataRef = ref(database);
//     const snapShot = await get(dataRef);

//     if (snapShot.exists()) {
//       return snapShot.val();
//     } else {
//       return {};
//     }
//   } catch (error) {
//     console.error("Error fetching teachers:", error);
//     throw error;
//   }
// });

export const getTeachers = createAsyncThunk("teachers/fetchAll", async () => {
  try {
    const database = getDatabase();
    const dataRef = ref(database);
    const snapShot = await get(dataRef);

    if (snapShot.exists()) {
      const teachersArray = Object.values(snapShot.val() || {}).map(
        (teacher, index) => ({
          ...teacher,
          id: `teacher-${index}`,
        })
      );
      return teachersArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
});
