import { createSlice } from "@reduxjs/toolkit";
import { experienceData } from "../../data/experienceData";

const initialState = {
  visible: false,
  data: experienceData,
};

export const experienceSlice = createSlice({
  name: "experience",
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
export const { save, clear } = experienceSlice.actions;

export default experienceSlice.reducer;
