// const input = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");
// input.value = 16;
// input.addEventListener("input", fn);
// function fn(e) {
//   text.style.fontSize = `${e.target.value}px`;
// }

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn);
function fn() {
  text.style.fontSize = `${input.value}px`;
}
fn();
