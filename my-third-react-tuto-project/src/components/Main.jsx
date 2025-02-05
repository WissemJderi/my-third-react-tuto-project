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
        <ul>{sortedIng}</ul>
      </main>
    </>
  );
}
