const IngredientList = ({ ingredients, addIngredientToBurger }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addIngredientToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;