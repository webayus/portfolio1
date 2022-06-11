import { createSlice } from "@reduxjs/toolkit";
import { headerData } from "../../data/headerData";

const initialState = {
  visible: false,
  data: headerData,
};

export const headerSlice = createSlice({
  name: "header",
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
export const { save, clear } = headerSlice.actions;

export default headerSlice.reducer;
