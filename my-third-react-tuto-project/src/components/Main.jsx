import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const sortedIng = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
          <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {sortedIng}
            </ul>
            {ingredients.length > 3 && (
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button>Get a recipe</button>
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}
