import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, addIngredientToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onButtonClick={() => addIngredientToBurger(ingredient)}
          buttonLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
