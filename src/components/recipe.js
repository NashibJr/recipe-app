import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div className="recipe-content">
      <img
        scr={recipe.image / recipe.imageType}
        width="100%"
        height="200px"
        alt=""
      />
      <h2>{recipe.title}</h2>
      <button
        type="button"
        onClick={() => {
          navigate(`/singlerecipe/${recipe.id}`);
        }}
      >
        View
      </button>
    </div>
  );
};

export default Recipe;
