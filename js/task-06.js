const input = document.querySelector('input[data-length="6"]')
input.addEventListener("blur", onBlur)
function onBlur(evt) {
    input.classList.remove('valid', 'invalid');
    if (evt.currentTarget.value.length > input.dataset.length) {
        input.classList.add('invalid')
    } else if (evt.currentTarget.value.length < input.dataset.length){
        input.classList.add('invalid')
    } else {
        input.classList.add('valid')
    }
} 