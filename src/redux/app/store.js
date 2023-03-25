import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../features/app/apiSlice";
import recipeSlice from "./recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
