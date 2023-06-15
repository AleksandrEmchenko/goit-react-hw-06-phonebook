import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
