const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsEl = document.querySelector("ul#ingredients");

const makeListOfIngredients = (ingredients) => {
  return ingredients.map((ingridient) => {
    const ingredientsListItem = document.createElement("li");
    ingredientsListItem.classList.add("item");
    ingredientsListItem.textContent = ingridient;
    return ingredientsListItem;
  });
};

const elements = makeListOfIngredients(ingredients);
listOfIngredientsEl.append(...elements);
