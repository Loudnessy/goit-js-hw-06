const inputName = document.querySelector("#name-input")
const span = document.querySelector("#name-output")
inputName.addEventListener("input", inputting)
function inputting(evt) {
   const value = span.textContent = evt.currentTarget.value.trim()
   span.textContent = value !== '' ? value : 'Anonymous';
}
