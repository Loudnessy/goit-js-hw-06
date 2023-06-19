const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  evt.currentTarget.reset();
}
