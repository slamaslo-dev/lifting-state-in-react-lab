import { useState } from "react";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import "./App.css";

function App() {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [burgerStack, setBurgerStack] = useState([]);

  const addIngredientToBurger = (ingredient) => {
    // const updatedStack = [...burgerStack, ingredient]
    const updatedStack = [ingredient, ...burgerStack] // Put the newest ingredient on top
    setBurgerStack(updatedStack);
    console.log(updatedStack)
  }

  const removeIngredientFromBurger = (indexToRemove) => {
    const updatedStack = burgerStack.filter((_, index) => index !== indexToRemove);
    setBurgerStack(updatedStack);
  };

  return (
    <>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addIngredientToBurger={addIngredientToBurger}/>
        <BurgerStack burgerStack={burgerStack} removeIngredientFromBurger={removeIngredientFromBurger}/>
      </section>
    </>
  );
}

export default App;
