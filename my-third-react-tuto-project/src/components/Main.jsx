export default function Main() {
  return (
    <>
      <main>
        <form className="add-ingredient-form">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
          />
          <button>Add Ingredient</button>
        </form>
      </main>
    </>
  );
}
