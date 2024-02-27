document.getElementById('show-window').addEventListener("click", () => {
    // console.log(document.querySelector('.window hidden'));
    document.querySelector('.window').classList.toggle('hidden');

})

document.getElementById('close-window').addEventListener('click', () => {
    document.querySelector('.window').classList.add('hidden');
})