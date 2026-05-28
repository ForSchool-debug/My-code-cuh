
console.log("Quiz startar");

/* Variabler för senare! */
var questionNumber = 0;
var score = 0;


/* Frågor */
var questions = [
{
title: "Capital of Sweden?",
answers: ["Stockholm", "Oslo", "Helsinki"],
correct: 0
},

{
title: "Capital of France?",
answers: ["Berlin", "Paris", "Rome"],
correct: 1
},

{
title: "Capital of Spain?",
answers: ["Madrid", "Lisbon", "London"],
correct: 0
},

{
title: "Capital of Norway?",
answers: ["Oslo", "Stockholm", "Copenhagen"],
correct: 0
},

{
title: "Capital of Finland?",
answers: ["Reykjavik", "Helsinki", "Dublin"],
correct: 1
},

{
title: "Brazil is in which continent?",
answers: ["South America", "Europe", "Asia"],
correct: 0
},

{
title: "Japan is in which continent?",
answers: ["Africa", "Asia", "South America"],
correct: 1
},

{
title: "Italy capital is?",
answers: ["Rome", "Paris", "Madrid"],
correct: 0
},

{
title: "Germany capital is?",
answers: ["Vienna", "Bern", "Berlin"],
correct: 2
},

{
title: "Egypt is in which continent?",
answers: ["Africa", "Europe", "Oceania"],
correct: 0
}
]

/* FÖR HTML! */
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");

var qText = document.getElementById("qText");

var progressText = document.getElementById("progressText");

var a0 = document.getElementById("a0");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");

var finalText = document.getElementById("finalText");

var btnStart = document.getElementById("btnStart");
var againBtn = document.getElementById("againBtn");

/* Starta quiz */
btnStart.onclick = function () {
start.classList.add("hide");
quiz.classList.remove("hide");
showQuestion();
};

/* Visa fråga */
function showQuestion() {

qText.innerText = questions[questionNumber].title;

progressText.innerText =
"Question " + (questionNumber + 1) + " / " + questions.length;

a0.innerText = questions[questionNumber].answers[0];
a1.innerText = questions[questionNumber].answers[1];
a2.innerText = questions[questionNumber].answers[2];
}

/* Kolla svar */
function checkAnswer(answer) {

if (answer == questions[questionNumber].correct) {
score++;
}
questionNumber++;

/* Slut */
if (questionNumber >= questions.length) {
quiz.classList.add("hide");
result.classList.remove("hide");
finalText.innerText = "You got " + score + " correct!";
}

/* Nästa fråga */
else {
showQuestion();
}
}
/* Knappar */
a0.onclick = function () {
checkAnswer(0);
};

a1.onclick = function () {
checkAnswer(1);
};

a2.onclick = function () {
checkAnswer(2);
};

/* Spela igen */
againBtn.onclick = function () {
result.classList.add("hide");
start.classList.remove("hide");

questionNumber = 0;
score = 0;

};