import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../../data/projectsData";

const initialState = {
  visible: false,
  data: projectsData,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    save: (state, action) => {
      state = action.payload;
    },
    clear: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { save, clear } = projectsSlice.actions;

export default projectsSlice.reducer;
