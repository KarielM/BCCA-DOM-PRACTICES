document.getElementById('backgroundColorPicker').addEventListener('input', () => {
    document.querySelector('div.area').style.background = document.getElementById('backgroundColorPicker').value;
})


document.getElementById('bubblesColorPicker').addEventListener('input', () => {
    document.querySelectorAll('.bubbles').forEach((bubble) => bubble.style.background = 
    document.getElementById('bubblesColorPicker').value)
})

//// for some reason you didn't notice that you put the bubbles in the input field like they were the button to be clicked and it took you
//like an hour to realize this
// console.log(document.querySelectorAll('li.bubbles'))
// console.log(document.querySelector('div.area.circles.bubbles'));
// // document.querySelectorAll('button.button-color').forEach((button) => button.addEventListener('click', () => {
// //     document.querySelector('span.emphasized-word').style.color = button.innerHTML;
// // }))

// document.querySelectorAll('li.bubbles').forEach((bubble) => {
//     console.log(document.querySelector('div.area.circles.bubbles'));
    
// })

// document.querySelectorAll('li.bubbles').forEach((bubble) => bubble.addEventListener('input', () => {
//     console.log(document.querySelectorAll(li.bubbles));
//     console.log(document.getElementById('bubblesColorPicker').value)
//     document.querySelector('li.bubbles').style.background = document.getElementById('bubblesColorPicker').value;
// }))