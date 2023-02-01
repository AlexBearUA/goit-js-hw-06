const refs = {
  input: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", InputChangeHandler);

function InputChangeHandler(event) {
  refs.outputName.textContent = event.currentTarget.value;
}
