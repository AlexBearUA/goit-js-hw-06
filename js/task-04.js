const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const currentValueEl = document.querySelector("#value");

let counterValue = 0;

function decrementBtnClickHandler() {
  counterValue -= 1;
  currentValueEl.textContent = counterValue;
}

function incrementBtnClickHandler() {
  counterValue += 1;
  currentValueEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrementBtnClickHandler);
incrementBtn.addEventListener("click", incrementBtnClickHandler);
