import { createSlice } from "@reduxjs/toolkit";
import { educationData } from "../../data/educationData";

const initialState = {
  visible: false,
  data: educationData,
};

export const educationSlice = createSlice({
  name: "education",
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
export const { save, clear } = educationSlice.actions;

export default educationSlice.reducer;
