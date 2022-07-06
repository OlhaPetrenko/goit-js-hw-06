function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonChengeColorEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

console.log(bodyEl);
console.log(buttonChengeColorEl);
console.log(textColor);

buttonChengeColorEl.addEventListener("click", onButtonChengeColorClick);

function onButtonChengeColorClick(event) {
  const color = getRandomHexColor();
  textColor.textContent = color;
  bodyEl.style.backgroundColor = color;
}
