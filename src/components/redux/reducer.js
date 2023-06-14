import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from './contactSlice';

// export const reducer = {
//   contacts: contactReducer,
// };

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});



// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setStatusFilter } from "./actions";

// const initialState = [];

// export const contactReducer = createReducer(initialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.findIndex((contact) => contact.id === action.payload);
//     state.splice(index, 1);
//   },
// });

// const filtersInitialState = {
//   filters: {
//     status: "",
//   },
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });
