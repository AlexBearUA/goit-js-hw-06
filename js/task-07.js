const input = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const inputChangeHandler = (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

input.addEventListener("input", inputChangeHandler);
