import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);
  console.log(recipe);
  return (
    <div className="recipe-align">
      <div className="singlerecipes">
        <div>
          <h2>Recipe</h2>
          <img src={recipe.image} alt="" width="300px" height="200px" />
          <h3>{recipe.title}</h3>
          <div>
            <strong>
              <em>Description</em>
            </strong>
            <p>{recipe.summary}</p>
          </div>
        </div>
        <div>
          <h2>Ingredients</h2>
          <div className="ingredients">
            {recipe.extendedIngredients.map((ingredient) => {
              return (
                <div key={ingredient.id}>
                  <img
                    src={ingredient.image}
                    alt=""
                    width="100px"
                    height="100px"
                  />
                  <strong>
                    <p>{ingredient.name}</p>
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Instructions</h2>
          {recipe.analyzedInstructions.map((item) =>
            item.steps.map((instruction) => (
              <li key={instruction.id}>{instruction.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
