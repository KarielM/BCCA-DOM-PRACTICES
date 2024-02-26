// console.log(document.getElementById('circleSlider').value)

document.getElementById('circleSlider').addEventListener('input', () => {
    document.querySelector('div.wave').style.height = document.querySelector('div.wave').style.width= document.getElementById('circleSlider').value + 'vh';
    //document.querySelector('div.wave').style.width = document.getElementById('circleSlider').value + 'vh';
    })
