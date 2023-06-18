const inputName = document.querySelector("#name-input")
const span = document.querySelector("#name-output")
inputName.addEventListener("input", inputting)
function inputting(evt) {
    span.textContent = event.currentTarget.value.trim()
}