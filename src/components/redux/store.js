import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistConfig = {
  key: "myLocalContacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const persistor = persistStore(store);
