const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemEl = ingredients.map((el) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = el;
  ingredientItem.classList.add("item");
  return ingredientItem;
});
console.log(itemEl);
const listEl = document.querySelector("#ingredients");

listEl.append(...itemEl);
console.log(listEl);
