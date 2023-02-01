function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

const makeBoxesMarkup = () => {
  const createBoxes = (amount) => {
    const boxes = new Array(amount).fill("");
    return boxes.reduce((resultString, element, index, array) => {
      return (resultString += `<div style = "width: ${
        30 + index * 10
      }px; height: ${
        30 + index * 10
      }px; background-color: ${getRandomHexColor()}"></div>`);
    }, ``);
  };
  boxesEl.insertAdjacentHTML("beforeend", createBoxes(Number(input.value)));
};

const removeBoxes = () => {
  boxesEl.innerHTML = "";
  input.value = "";
};

createBtn.addEventListener("click", makeBoxesMarkup);
destroyBtn.addEventListener("click", removeBoxes);
