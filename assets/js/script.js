let startButton = document.querySelector('#start-btn');
let highScoreButton = document.querySelector('hiScoreBtn');
let quizIntro = document.querySelector('#quiz-intro');
let questionsPage = document.querySelector('questions-page');


let sec = 50;
let timerEl = document.getElementById('timer');


let questions = [
    {
        question: "Which of the following is NOT a real html tag?",
        options: ["<br>", "<svg>", "<hamburger>", "<div>"],
        answer: "<hamburger>",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Sharkup Language", "Cascading Style Sheet", "Hungry To Make Lunch"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "What is the newest version of Javascript, as of June 2021?",
        options: ["ES5", "ES6", "ES12", "ES20"],
        answer: "ES12",
    },
        {
        question: "What is the newest version of Javascript, as of June 2021?",
        options: ["ES5", "ES6", "ES12", "ES20"],
        answer: "ES12",
    },
];

// timer function

function timerFunc() {
    let timer = setInterval(function () {
        document.getElementById('timer').innerHTML = "Timer: " + sec;
        sec--;
        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);


function startGame() {
    timerFunc();
    quizIntro.setAttribute("class", "none");
}


