function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

const makeBoxesMarkup = (amount) => {
  amount = Number(input.value);
  const boxesMarkUp = new Array(amount)
    .fill("")
    .reduce((resultString, element, index) => {
      return (resultString += `<div style = "width: ${
        30 + index * 10
      }px; height: ${
        30 + index * 10
      }px; background-color: ${getRandomHexColor()}"></div>`);
    }, ``);
  boxesEl.insertAdjacentHTML("beforeend", boxesMarkUp);
};

const removeBoxes = () => {
  boxesEl.innerHTML = "";
  input.value = "";
};

createBtn.addEventListener("click", makeBoxesMarkup);
destroyBtn.addEventListener("click", removeBoxes);
