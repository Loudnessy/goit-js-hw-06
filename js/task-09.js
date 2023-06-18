const main = document.querySelector("body")
const button = document.querySelector(".change-color")
const span = document.querySelector(".color")
button.addEventListener("click", changeColor)

function changeColor() {
  main.style.backgroundColor = getRandomHexColor()
span.textContent = getRandomHexColor()
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}