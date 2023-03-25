import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//5be40ace6ac346c0b88fc5aa6543f3a0
const initialState = {
  recipes: [],
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (recipeName) => {
    const client = axios.create({
      baseURL: `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=20&apiKey=5be40ace6ac346c0b88fc5aa6543f3a0`,
    });
    const response = await client.get();
    if (recipeName === "") {
      return [];
    } else {
      console.log(response.data.results);
      return response.data.results;
    }
  }
);
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
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

export default recipeSlice;
