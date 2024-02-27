document.querySelectorAll('button.button-color').forEach((button) => button.addEventListener('click', () => {
    document.querySelector('span.emphasized-word').style.color = button.innerHTML;
}))
// document.querySelectorAll('button.button-color').forEach(myFunction)
// // let buttons = document.querySelectorAll('button.button-color');

// // buttons.forEach(myFunction);

// function myFunction (button){
//     button.addEventListener('click',() => {
//         document.querySelector('span.emphasized-word').style.color = button.innerHTML;
//     })
// }

// function changeColor(){
//     document.querySelector('span.emphasized-word').style.color = document.querySelector('span.emphasized-word').innerHTML;
// }
// buttons.forEach((button) => button.addEventListener('click', () => {
//     document.querySelector('span.emphasized-word').style.color = button.innerHTML;
// }));



// const colorButtons = document.querySelectorAll('button.button-color');
// console.log(typeof(colorButtons));

// for (i of colorButtons) {
//     console.log(i.innerHTML);
//     colorButtons[i].addEventListener('click', () => {
//         document.querySelector('span.emphasized-word').style.color = i.innerHTML;
//     })
// }


// colorButtons.forEach((button) => button.addEventListener('click', () => {
//     document.querySelector('span.emphasized-word').style.color = button.innerHTML;
// })
// )
// console.log(typeof(document.querySelectorAll('button.button-color')))