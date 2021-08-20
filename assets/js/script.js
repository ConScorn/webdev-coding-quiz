let startButton = document.querySelector('#start-btn');
let highScoreButton = document.querySelector('hiScoreBtn');
let quizIntro = document.querySelector('#quiz-intro');
let questionsPage = document.querySelector('#questions-page');
let questionBox = document.querySelector('#question-box');
let optionButtons = document.querySelectorAll('.option-btn');

let sec = 50;
let timerEl = document.getElementById('timer');
let index = 0;
let answerText = '';
let score = 0;

let questions = [
    {
        question: "Which of the following is NOT a real html tag?",
        options: [" <br> ", " <svg> ", " <hamburger> ", " <div> "],
        answer: " <hamburger> ",
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
    }
    //     {
    //     question: "What is the newest version of Javascript, as of June 2021?",
    //     options: ["ES5", "ES6", "ES12", "ES20"],
    //     answer: "ES12",
    // },
];

// This function will prepare the first page, upon loading
function init() {
     questionsPage.setAttribute("class", "none");
}

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

function resetTimer() {

}

startButton.addEventListener("click", startGame);
// optionButton.addEventListener("click", function () {
//     console.log(this.textContent);
// });

// adding the event listener by looping
optionButtons.forEach(optionButton => {
   optionButton.addEventListener('click', (e)=>{
       answerText = e.target.textContent;
       correctClick();
   });
});


// This function starts the timer, hides the intro page, and displays the first question
function startGame() {
    timerFunc();
    quizIntro.setAttribute("class", "none");
    questionsPage.setAttribute("class", "flex");
    showQuestion();
}

// This function will fill the corresponding HTML elements with the question, and answer options
function showQuestion() {
    let currentQuestion = questions[index];
    questionBox.innerHTML = currentQuestion.question;

    let options = currentQuestion.options;
    for (i = 0; i < options.length; i++) {
        document.querySelector(`#option-btn-${i}`).textContent = options[i];
        document.querySelector(`#option-btn-${i}`).setAttribute('value', options[i]);
    }
}

function correctClick() {
    // if clicked option button is correct answer, index + 1, hide question and options, load next question

    
    if (answerText == questions[index].answer) {
        score += 10;
        index += 1;
        if (index > questions.length) {
            // 
            // break;
        } else {
            showQuestion();               
        }
    } else {
        questionBox.textContent = "Incorrect!";
        sec -= 10;
    }
}

init();