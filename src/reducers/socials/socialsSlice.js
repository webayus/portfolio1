import { createSlice } from "@reduxjs/toolkit";
import { socialsData } from "../../data/socialsData";

const initialState = {
  visible: false,
  data: socialsData,
};

export const socialsSlice = createSlice({
  name: "socials",
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
export const { save, clear } = socialsSlice.actions;

export default socialsSlice.reducer;
