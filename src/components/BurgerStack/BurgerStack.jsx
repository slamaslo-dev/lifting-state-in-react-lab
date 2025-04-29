import Ingredient from "../Ingredient/Ingredient";
const BurgerStack = ({ burgerStack, removeIngredientFromBurger }) => {
  return (
    <ul>
      {burgerStack.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onButtonClick={() => removeIngredientFromBurger(index)}
          buttonLabel="X"
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
