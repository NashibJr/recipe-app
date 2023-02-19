import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  recipes: [],
  status: "idle",
  recipeName: "",
  error: null,
};
const client = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v1/1/search.php?s=${initialState.recipeName}`,
});
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await client.get();
    return response.data.meals;
  }
);
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipeName: (state, action) => {
      const recipeName = action.payload;
      state.recipeName = recipeName;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "successfull";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addRecipeName } = recipeSlice.actions;

export default recipeSlice;
