


// const input = document.querySelector('input');
// const score = document.querySelector('.score');
// const highscore = document.querySelector('.highscore');
// const check = document.querySelector('.check');
// const number = document.querySelector('div[name="number"]')
// const again = document.querySelector('.again');
// const message = document.querySelector('#message');

// function reset() {
//     score.innerText = 20;
//     message.innerText = 'Try the game!';
//     number.innerText = '?';
// }

// function loopChecks () {
//     if (score.innerText != 0 && message.innerText != 'Correct!') {
//         if (input.value == randomNum) {
//             highscore.innerText = score.innerText > highscore.innerText ? score.innerText : highscore.innerText;
//             number.innerText = randomNum;
//             message.innerText = 'Correct!'
//         } else {
//             score.innerText = Number(score.innerText) - 1;
//             message.innerText = input.value > randomNum ? 'Too High!' : score.innerText == 0 ? 'Game Over' : 'Too Low!';
//         }
//     }
// }

// function mainGameLoop() {
//     randomNum = Math.floor(Math.random() * 20) + 1;
//     console.log(randomNum);
//     check.addEventListener('click', loopChecks);

//     again.addEventListener('click', () => {
//         check.removeEventListener('click', loopChecks)
//         reset();
//         mainGameLoop();
//     });

// }

// mainGameLoop();

// let number = Math.ceil(Math.random() * 20);

//Math.ceil(math.random() * 20) makes 20 inclusive bc rounding up
var number = Math.ceil(Math.random() * 20)
console.log(number);
let highScore;
let newHighScore;
let gameScore = Number(document.querySelector('span.score').innerHTML);
let attempts = 0;


document.querySelector('button.btn.check').addEventListener(
    "click", () => {
        console.log(number);
        let guess = document.querySelector('input.guess').value;
        attempts++
        if (guess == number){
            let highScore = (attempts <= 20) ? attempts : 20;
            document.querySelector('span.score').innerHTML = (gameScore != 0) ? gameScore -= 1 : 0;
            document.getElementById('message').innerHTML = "You are correct!"
            document.querySelector('div[name = number]').innerHTML = `${number}`;
            document.querySelector('div.game').style.backgroundColor = "green";
            document.getElementById("label-highscore").innerHTML = 
            (newHighScore === undefined) ? `HighScore: ${highScore}`:
            (newHighScore !== undefined 
                && highScore > newHighScore) ? `HighScore: ${highScore}`:
                `HighScore: ${newHighScore}`;
            
            // (highScore < newHighScore && newHighScore === undefined) ?
            // `Highscore: ${highScore}` : `Highscore: ${newHighScore}`;
            /*(highScore > newHighScore && newHighScore !== undefined) ? */
            // `Highscore: ${highScore}` : `Highscore: ${newHighScore}`;
        }
        else {
            // attempts++
            // console.log(attempts)
            // gameScore = (gameScore > 0) ? gameScore-= 1 : 0;
            document.querySelector('span.score').innerHTML = (gameScore != 0) ? gameScore -= 1 : 0;
            document.getElementById('message').innerHTML = (guess > number ) ? "Lower" : 
            (guess < number && gameScore > 0) ? 'Higher':
            "GAME OVER";
            // document.getElementById("label-highscore").innerHTML = `Highscore: ${20 - gameScore}`

    }
})

document.querySelector('button').addEventListener(
    "click", () => {
        attempts = 0;
        newHighScore = /*(highScore !== undefined) ? attempts: */undefined;
        // console.log(attempts)
        // console.log(highScore)
        // newHighScore = (highScore < attempts) ? attempts = 0 : highScore;
        number = Math.ceil(Math.random() * 20);
        gameScore = 20;
        document.querySelector('input.guess').value = '';
        document.querySelector('div[name = number]').innerHTML = '?';
        document.getElementById('message').innerHTML = "Try the Game!"
        document.querySelector('span.score').innerHTML = "20";
        document.querySelector('div.game').style.backgroundColor = "initial";
    })
// console.log(newHighScore);
// var currNumber = Math.floor(Math.random(1) * 21);
// console.log(currNumber)
// var guess = document.querySelector('.guess');
// var guessButton = document.querySelector('.btn.check');
// var questionMark = document.getElementsByName('number')[0];
// var score = document.querySelector('.score');
// var message = document.getElementById("message");
// var highScore = document.getElementsByClassName('highscore')[0];
// let bonusRoundCheck = false;

// guessButton.addEventListener('click', () => {
//     if (currNumber === guess.valueAsNumber) {
//         guessButton.parentNode.parentNode.style.backgroundColor = 'green';
//         questionMark.innerText = guess.value;
//         message.innerText = "Correct!";
//         score.innerText = (bonusRoundCheck ? Number(score.innerText) + 2: Number(score.innerText) + 1)
//         // score.innerText = Number(score.innerText) + 1;
//         if (Number(score.innerText) > Number(highScore.innerText)) {
//             highScore.innerText = score.innerText;
//         };
//         setTimeout(() => {
//             guessButton.parentNode.parentNode.style.backgroundColor = '#222';
//             questionMark.innerText = '?';
//             currNumber = undefined;
//             currNumber = Math.floor(Math.random(1) * 21);
//             winStatus = false;
//         }, 3000);
//         bonusRoundCheck = true;
//     } else if (isNaN(guess.valueAsNumber)) {
//         message.innerText = "You must actually guess!";
//     } else if (currNumber > guess.valueAsNumber) {
//         message.innerText = "Too Low! Try again!";
//         score.innerText = Number(score.innerText) - 1;
//     } else if (currNumber < guess.valueAsNumber) {
//         message.innerText = "Too High! Try again!";
//         score.innerText = Number(score.innerText) - 1;
//     }
// })
// let againButton = document.querySelector('button.btn.again');
// againButton.addEventListener('click', () => {
//     guessButton.parentNode.parentNode.style.backgroundColor = '#222';
//     questionMark.innerText = '?';
//     score.innerText = 20;
//     currNumber = undefined;
//     currNumber = Math.floor(Math.random(1) * 21);
//     bonusRoundCheck = false;
// })


// let firstHeader = document.getElementsByTagName('h1')[0];
// console.log(firstHeader);

// setInterval(() => {
//     if (firstHeader.style.color == "white") {
//         firstHeader.style.color = "red";
//     } else if (firstHeader.style.color == "red") {
//         firstHeader.style.color = "blue";
//     } else {
//         firstHeader.style.color = "white";
//     }
// }, 1000)