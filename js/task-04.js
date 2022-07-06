const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

// console.log(refs.buttonDecrement);
// console.log(refs.buttonIncrement);
// console.log(counterValue);
// console.log(value);

refs.buttonDecrement.addEventListener("click", onButtonDecrementClick);
refs.buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
