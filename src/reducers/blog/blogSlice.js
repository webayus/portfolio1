import { createSlice } from "@reduxjs/toolkit";
import { blogData } from "../../data/blogData";

const initialState = {
  visible: false,
  data: blogData,
};

export const blogSlice = createSlice({
  name: "blog",
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
export const { save, clear } = blogSlice.actions;

export default blogSlice.reducer;
