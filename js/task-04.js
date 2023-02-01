const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const currentValueInterface = document.querySelector("#value");

let counterValue = 0;

function decrementBtnClickHandler() {
  counterValue -= 1;
  currentValueInterface.textContent = counterValue;
}

function incrementBtnClickHandler() {
  counterValue += 1;
  currentValueInterface.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrementBtnClickHandler);
incrementBtn.addEventListener("click", incrementBtnClickHandler);
