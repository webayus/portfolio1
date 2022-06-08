import { createSlice } from "@reduxjs/toolkit";
import { achievementData } from "../../data/achievementData";

const initialState = {
  visible: false,
  data: achievementData,
};

export const achievementSlice = createSlice({
  name: "achievement",
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
export const { save, clear } = achievementSlice.actions;

export default achievementSlice.reducer;
