import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "recipes",
  storage,
};
const reducers = combineReducers({
  recipes: recipeSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
