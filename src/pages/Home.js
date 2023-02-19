import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../components/recipe";
import { addRecipeName, fetchRecipes } from "../redux/app/recipeSlice";

const Home = () => {
  const [recipe, setRecipe] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipes);
  const recipes = state.recipes;
  return (
    <div className="recipe-align">
      <div className="recipe-image-content">
        <div>
          <h2>A simple recipe app...</h2>
          <p>
            Search for a meal and you will be shown how to prepare it including
            ingredients
          </p>
        </div>
        <form>
          <p>Search for a recipe from here!!!!!!</p>
          <input
            type="text"
            placeholder="Search for a recipe"
            name="recipe"
            value={recipe}
            onChange={(event) => setRecipe(event.target.value)}
            className="form-input-content"
          />
          <button
            type="button"
            onClick={() => {
              dispatch(addRecipeName(recipe));
              dispatch(fetchRecipes());
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="align-recipes">
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe} key={recipe.id} />;
        })}
        <p>{state.error}</p>
      </div>
    </div>
  );
};

export default Home;
