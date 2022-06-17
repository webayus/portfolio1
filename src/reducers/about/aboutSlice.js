import { createSlice } from "@reduxjs/toolkit";
import { aboutData } from "../../data/aboutData";

// const initialState = {
//   visible: false,
//   data: {
//     title: "",
//     description1: "",
//     description2: "",
//     image: 2,
//   },
// };

const initialState = {
  visible: false,
  data: aboutData,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    save: (state, action) => {
      state.visible = action.payload.visible;
      state.data = action.payload.data;
    },
    clear: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { save, clear } = aboutSlice.actions;

export default aboutSlice.reducer;
