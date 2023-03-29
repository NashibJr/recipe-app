import React from "react";

const About = () => {
  return (
    <div className="about-content">
      <h2>about the recipe app</h2>
      <p>
        <strong>
          <em>Nash Recipe app</em>
        </strong>{" "}
        is developed to ease the work of the cooks and chefs. It is developed
        with a search input where a user can search fro any recipe of their
        choices. It brings back a maximum of 20 recipes for a particular
        recipename entered into the search input. Each recipe has a view button
        and on cicking the button it takes you to a single page with the recipe
        information about the ingredients required to prepare the recipe, it's
        description and the instructions followed while prepari n the recipe.
      </p>
      <p>
        For any issues regarding the app, you can talk directly to the developer
        whose addressed are included on the developer contact nav bar
      </p>
    </div>
  );
};

export default About;
