var characters = null;
var step = 0;
var score = 0;

var situation = document.getElementById('situation');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var image = document.getElementById('image');
var restarGame = document.getElementById('restarGame');
var quality = document.getElementById('quality');
var progressBar = document.getElementById('progressBar');

restarGame.addEventListener('click', function() {
    handleAnswer(0);
})

function resetGame() {
    character = null;
    step = 0;
    score = 0;
    window.location.replace('../characters.html');
}

function startGame(gamePlay) {
    character = gamePlay;
    showQuestion();
}

function showQuestion() {
    let {question, option1, option2, isEnd} = character[step];
    situation.innerHTML = question;
    answer1.innerHTML = option1;
    answer2.innerHTML = option2;
    quality.innerHTML = `${score}%`;
    progressBar.value = score;

    if (!isEnd) {
        setTimeout(function(){
            makePrompt();
        }, 1000);
    } else {
        answer1.hidden = true;
        answer2.hidden = true;
        restarGame.hidden = false;
        changeImage();

    }    
}

function changeImage() {
    if (score >= 60) {
        image.src = '../assets/images/checked.png';
    } else {
        image.src = '../assets/images/fail.png';
    }
}

function makePrompt () {
    let {option1, option2} = character[step];
    let userInput = '';

    while (userInput != '1' && userInput != '2' && userInput != '0') {
    userInput = prompt(`Escolha uma das alternativas:
    
        1 - ${option1}
        2 - ${option2}
        
        0 - Reiniciar game`);
    }
    handleAnswer(userInput);
}

function handleAnswer(answerChoosed) {
    if (answerChoosed == 0) {
        resetGame();
    } else {
        nextStep(answerChoosed);
    } 
}

function nextStep(id) {
    if (id == '1') {
        score += character[step].points1
        step = character[step].nextStep1;
    } else {
        score += character[step].points2
        step = character[step].nextStep2;
    }
    showQuestion();
}