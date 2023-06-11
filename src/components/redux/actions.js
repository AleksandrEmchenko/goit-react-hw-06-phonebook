import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const myFilter = (filter) => {
  return {
    type: "filters/myFilter",
    payload: filter,
  };
};
