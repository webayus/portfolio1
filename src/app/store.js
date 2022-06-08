import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../reducers/about/aboutSlice";

export default configureStore({
  reducer: {
    about: aboutReducer,
  },
});
