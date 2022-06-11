import { createSlice } from "@reduxjs/toolkit";
import { skillsData } from "../../data/skillsData";

const initialState = {
  visible: false,
  data: skillsData,
};

export const skillsSlice = createSlice({
  name: "skills",
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
export const { save, clear } = skillsSlice.actions;

export default skillsSlice.reducer;
