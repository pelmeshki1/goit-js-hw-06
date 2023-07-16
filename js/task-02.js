const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulElement = document.createElement("ul");
for (const ingredient of ingredients) {
  const liElment = document.createElement("li");
  liElment.textContent = ingredient;
  ulElement.appendChild(liElment);
}
document.body.appendChild(ulElement);
