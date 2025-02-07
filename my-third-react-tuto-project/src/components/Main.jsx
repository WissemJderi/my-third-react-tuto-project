import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Apple",
    "Mango",
    "Banana",
    "Orange",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function recipeShownButton(event) {
    event.preventDefault();
    setRecipeShown((prevShown) => !prevShown);
  }
  return (
    <>
      <main>
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>

        {ingredients.length > 0 && (
          <IngredientsList
            ingredients={ingredients}
            recipeShownButton={recipeShownButton}
          />
        )}
        {/* recipeCode here  */}
        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
}
