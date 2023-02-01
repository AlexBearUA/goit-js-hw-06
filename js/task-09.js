function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const backgroundColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

const changeColorBtnClickHeandler = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  backgroundColor.textContent = `${getRandomHexColor()}`;
};

changeColorBtn.addEventListener("click", changeColorBtnClickHeandler);
