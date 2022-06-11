import { createSlice } from "@reduxjs/toolkit";
import { contactsData } from "../../data/contactsData";

const initialState = {
  visible: false,
  data: contactsData,
};

export const contactslice = createSlice({
  name: "contacts",
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
export const { save, clear } = contactslice.actions;

export default contactslice.reducer;
