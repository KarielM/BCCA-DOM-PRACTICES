document.querySelector('button.font-size-down').addEventListener('click', () => {
    document.querySelector('p[name = main-text]').style.fontSize = 2 + 'rem';
}) 

document.querySelector('button.font-default-size').addEventListener('click', () => {
    document.querySelector('p[name = main-text]').style.fontSize = 4 + 'rem';
})

document.querySelector('button.font-size-up').addEventListener('click', () => {
    document.querySelector('p[name = main-text').style.fontSize = 6 + 'rem';
})