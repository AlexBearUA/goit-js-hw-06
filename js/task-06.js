const input = document.querySelector("#validation-input");

const inputBlurHandler = (event) => {
  event.currentTarget.value.length === Number(input.dataset.length)
    ? (input.classList.add("valid"), input.classList.remove("invalid"))
    : (input.classList.add("invalid"), input.classList.remove("valid"));
};

input.addEventListener("blur", inputBlurHandler);
