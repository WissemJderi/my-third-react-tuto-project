import PropTypes from "prop-types";

export default function IngredientsList(props) {
  const { ingredients, recipeShownButton } = props;
  const sortedIng = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {sortedIng}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={recipeShownButton}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeShownButton: PropTypes.func.isRequired,
};
