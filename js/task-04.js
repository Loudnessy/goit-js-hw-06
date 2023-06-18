const buttonMinus = document.querySelector('button[data-action="decrement"]')
const span = document.querySelector("#value")
const buttonPlus = document.querySelector('button[data-action="increment"]')
let count = 0
buttonMinus.addEventListener("click", onClickMinus)
function onClickMinus() {
    count --
    span.textContent = count
}
buttonPlus.addEventListener("click", onClickPlus)
function onClickPlus() {
    count ++
    span.textContent = count
}