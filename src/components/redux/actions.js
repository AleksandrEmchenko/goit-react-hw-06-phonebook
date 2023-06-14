// import { createAction, nanoid } from "@reduxjs/toolkit";

// // const contactSlice = createSlice({
// //   name: "contacts",
// //   initialState,
// //   reducers: {
// //     addContact: {
// //       reducer(state, action) {
// //         state.push(action.payload);
// //       },
// //       prepare(name, number) {
// //         return { payload: { id: nanoid(), name, number } };
// //       },
// //     },
// //     deleteContact: {
// //       reducer(state, action) {
// //         const index = state.findIndex(
// //           (contact) => contact.id === action.payload
// //         );
// //         state.splice(index, 1);
// //       },
// //     },
// //     setStatusFilter: {
// //       reducer(state, action) {
// //         state.status = action.payload;
// //       },
// //     },
// //   },
// // });

// export const addContact = createAction("contacts/addContact", (name, number) => {
//     return {
//       type: "contacts/addContact",
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   });

// export const deleteContact = createAction("contacts/deleteContact");

// export const setStatusFilter = createAction("filters/setStatusFilter");
