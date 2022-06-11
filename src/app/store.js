import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../reducers/about/aboutSlice";
import blogReducer from "../reducers/blog/blogSlice";
import achievementReducer from "../reducers/achievement/achievementSlice";
import contactsReducer from "../reducers/contacts/contactsSlice";
import educationReducer from "../reducers/education/educationSlice";
import experienceReducer from "../reducers/experience/experienceSlice";
import headerReducer from "../reducers/header/headerSlice";

export default configureStore({
  reducer: {
    about: aboutReducer,
    achievement: achievementReducer,
    blog: blogReducer,
    contacts: contactsReducer,
    education: educationReducer,
    experience: experienceReducer,
    header: headerReducer,
  },
});
