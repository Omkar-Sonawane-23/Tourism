import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "../slice/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
