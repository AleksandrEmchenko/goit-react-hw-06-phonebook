import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./contactSlice";

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
