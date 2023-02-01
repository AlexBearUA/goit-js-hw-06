const refs = {
  input: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

const InputChangeHandler = (event) => {
  event.currentTarget.value !== ""
    ? (refs.outputName.textContent = event.currentTarget.value)
    : (refs.outputName.textContent = "Anonymous");
};

refs.input.addEventListener("input", InputChangeHandler);
