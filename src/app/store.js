import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../reducers/about/aboutSlice";
import blogReducer from "../reducers/blog/blogSlice";
import achievementReducer from "../reducers/achievement/achievementSlice";

export default configureStore({
  reducer: {
    about: aboutReducer,
    achievement: achievementReducer,
    blog: blogReducer
  },
});
