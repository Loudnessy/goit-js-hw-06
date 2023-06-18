const ul = document.querySelector('#categories')
const li = document.querySelectorAll('.item')
console.log(`Number of categories: ${li.length}`);
li.forEach(item => {
const liTittle = item.querySelector('h2').textContent
const itemsOfLi = item.querySelectorAll('li').length
console.log(`Category: ${liTittle}`);
console.log(`Elements: ${itemsOfLi}`);
})

