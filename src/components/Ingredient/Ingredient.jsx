const Ingredient = ({ ingredient, onButtonClick, buttonLabel }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        {onButtonClick && (
          <button onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </li>
    );
  };
  
  export default Ingredient;