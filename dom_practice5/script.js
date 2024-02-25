document.querySelectorAll('button.button-color').forEach((button) => button.addEventListener('click', () => {
    document.querySelector('span.emphasized-word').style.color = button.innerHTML;
}))

// const colorButtons = document.querySelectorAll('button.button-color');



// colorButtons.forEach((button) => button.addEventListener('click', () => {
//     document.querySelector('span.emphasized-word').style.color = button.innerHTML;
// })
// )
// console.log(typeof(document.querySelectorAll('button.button-color')))