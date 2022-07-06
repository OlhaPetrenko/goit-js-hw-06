const refs = {
  form: document.querySelector(".login-form"),
};

// console.log(refs.form);

refs.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля форми мають бути заповненими!");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   if (
//     event.currentTarget.elements.email.value === "" ||
//     event.currentTarget.elements.password.value === ""
//   ) {
//     alert("Всі поля форми мають бути заповненими!");
//   }
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("name:", name), console.log("value:", value);
//   });
//   event.currentTarget.reset();
// console.log(event.currentTarget.elements.email.value);
//   //   console.log(event.currentTarget.elements.password.value);
//   //   console.log(formData);
// }
