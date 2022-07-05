const listItemEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", listItemEl.length);

listItemEl.forEach((el) => {
  const categoryTitleEl = el.querySelector("h2");
  console.log(`Category: ${categoryTitleEl.textContent}`);
  const categoryListItemEl = el.querySelectorAll("ul > li");
  console.log(`Elements: ${categoryListItemEl.length}`);
});
