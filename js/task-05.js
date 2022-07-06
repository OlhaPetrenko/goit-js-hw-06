const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputInput);

function onInputInput(event) {
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value !== "") {
    refs.name.textContent = event.currentTarget.value;
  } else {
    refs.name.textContent = "Anonymous";
  }
}
