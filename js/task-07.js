const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text")
input.addEventListener('input', onRange)
function onRange(evt){
const fontSize = evt.currentTarget.value + 'px';
  span.style.fontSize = fontSize;
}