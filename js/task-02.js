const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const ulElement = document.querySelector("#ingredients");
// for (const ingredient of ingredients) {
//   const liElment = document.createElement("li");
//   liElment.textContent = ingredient;
//   ulElement.appendChild(liElment);
// }
// document.body.appendChild(ulElement);

const ulElement = document.querySelector("#ingredients");

console.log(ulElement);
console.log(ingredients);

const listRefs = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});

ulElement.append(...listRefs);
