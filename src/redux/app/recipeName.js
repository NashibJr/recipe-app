import { createSlice } from "@reduxjs/toolkit";

const recipeNameSlice = createSlice({
  name: "recipeNames",
  initialState: "",
  reducers: {
    setRecipeName: (state, action) => action.payload,
  },
});

export default recipeNameSlice;
