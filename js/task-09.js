// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const bodyEl = document.querySelector("body");

// const changeColorEl = document.querySelector(".change-color");

// const colorEl = document.querySelector(".color");

// changeColorEl.addEventListener("click", changeBgColorRandom);

// function changeBgColorRandom() {
//   bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
//   colorEl.textContent = getRandomHexColor();
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButon = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorChange = document.querySelector(".color");

changeButon.addEventListener("click", changeColor);
function changeColor() {
  let color = getRandomHexColor();
  body.style.background = color;
  colorChange.textContent = color;
}
