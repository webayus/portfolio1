import { createSlice } from "@reduxjs/toolkit";
import {aboutData} from "../../data/aboutData"

// const initialState = {
//   title: "",
//   description1: "",
//   description2: "",
//   image: 2,
// }

const initialState = aboutData

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    save: (state, action) => {
      state = action.payload;
    },
    clear: (state) => {
      state = initialState
    },
  },
});

// Action creators are generated for each case reducer function
export const { save, clear } = aboutSlice.actions;

export default aboutSlice.reducer;
