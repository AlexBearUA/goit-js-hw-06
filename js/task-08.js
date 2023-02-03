const form = document.querySelector(".login-form");

const loginFormSubmitHeandler = (event) => {
  event.preventDefault();

  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  formData.email === "" || formData.password === ""
    ? alert("Заповніть форму")
    : console.log(formData);

  event.currentTarget.reset();
};

form.addEventListener("submit", loginFormSubmitHeandler);
