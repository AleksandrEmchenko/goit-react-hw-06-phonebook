import { createSlice, nanoid } from "@reduxjs/toolkit";
// import  reducer  from "./reducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { contactReducer } from "./contactSlice";
// import { combineReducers } from "@reduxjs/toolkit";

// const initialState = [];

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
        const index = state.findIndex(
          (contact) => contact.id === action.payload
        );
        state.splice(index, 1);
      },
    },
    // setStatusFilter: {
    //   reducer(state, action) {
    //     state.status = action.payload;
    //   },
    // },
  },
});



//////////////////////////
// import { createSlice } from "@reduxjs/toolkit";
// import initialState from "./initialState";

// const filterInitialState = {
//   status: "",
// };




const filterSlice = createSlice({
  name: "filter",
  initialState: "", //filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;




/////////////////

// const persistConfig = {
//   key: "localContacts",
//   storage,
// };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: "",
//   reducers: {
//     updateFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });



// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

export const {
  addContact,
  deleteContact,
  
} = contactSlice.actions;


// export const { setFilter } = filterSlice.actions;

export const contactsReducer = contactSlice.reducer;
// export const filterReducer = filterSlice.reducer;


// export const reducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

