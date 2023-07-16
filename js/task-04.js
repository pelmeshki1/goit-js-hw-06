const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const vaulueElement = document.querySelector("#value");
let counterValue = 0;
function decrement(event) {
  counterValue -= 1;
  vaulueElement.textContent = counterValue;
}
function increment(event) {
  counterValue += 1;
  vaulueElement.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
