import { createSlice } from "@reduxjs/toolkit";
import { testimonialsData } from "../../data/testimonialsData";

const initialState = {
  visible: false,
  data: testimonialsData,
};

export const testimonialsSlice = createSlice({
  name: "testimonials",
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
export const { save, clear } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
