const BurgerStack = ({ burgerStack, removeIngredientFromBurger }) => {
    return (
      <ul>
        {burgerStack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeIngredientFromBurger(index)}>x</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  