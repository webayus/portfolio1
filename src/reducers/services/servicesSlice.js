import { createSlice } from "@reduxjs/toolkit";
import { servicesData } from "../../data/servicesData";

const initialState = {
  visible: false,
  data: servicesData,
};

export const servicesSlice = createSlice({
  name: "services",
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
export const { save, clear } = servicesSlice.actions;

export default servicesSlice.reducer;
