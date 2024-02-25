// let number = Math.ceil(Math.random() * 20);
var number = Math.ceil(Math.random() * 21)
console.log(number);
let highScore = 0;
let gameScore = Number(document.querySelector('span.score').innerHTML);


document.querySelector('button.btn.check').addEventListener(
    "click", () => {
        console.log(number);
        let guess = document.querySelector('input.guess').value;
        // console.log(typeof(guess));
        if (guess == number){
            highScore ++;
            document.getElementById('message').innerHTML = "You are correct!"
            document.querySelector('div[name = number]').innerHTML = `${number}`
            document.querySelector('div.game').style.backgroundColor = "green";
            document.getElementById("label-highscore").innerHTML = `Highscore: ${highScore}`
            // console.log("hi");
        }
        else {
            gameScore = (gameScore > 0) ? gameScore-= 1 : 0;
            document.querySelector('span.score').innerHTML = (gameScore != 0) ? `${gameScore}` : 0;
            document.getElementById('message').innerHTML = (guess > number ) ? "Lower" : 
            (guess < number && gameScore > 0) ? 'Higher':
            "GAME OVER";

    }
})

document.querySelector('button').addEventListener(
    "click", () => {
        number = Math.ceil(Math.random() * 21);
        console.log(number);
        gameScore = 20;
        document.querySelector('div[name = number]').innerHTML = '?';
        document.getElementById('message').innerHTML = "Try the Game!"
        document.querySelector('span.score').innerHTML = 20;
        document.querySelector('div.game').style.backgroundColor = "initial";
    })

