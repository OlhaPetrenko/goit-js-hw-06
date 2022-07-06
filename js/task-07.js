const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

// console.log(refs.input);
// console.log(refs.text);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
  //   console.log(event.currentTarget.value);
}
