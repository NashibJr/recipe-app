import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/recipes/complexSearch?`,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: (name) =>
        `query=${name}&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=20&apiKey=5be40ace6ac346c0b88fc5aa6543f3a0`,
    }),
  }),
});

export const { useGetRecipesMutation } = apiSlice;
