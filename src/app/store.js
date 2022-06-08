import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../reducers/about/aboutSlice";
import achievementReducer from "../reducers/achievement/achievementSlice";

export default configureStore({
  reducer: {
    about: aboutReducer,
    achievement: achievementReducer,
  },
});
