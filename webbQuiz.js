console.log("Quiz started");
/* Frågarna. */
var questions = [

  {
    title: "Capital of Sweden?",

    answers: [
      "Stockholm",
      "Oslo",
      "Helsinki"
    ],

    correct: 0
  },

  {
    title: "Capital of France?",

    answers: [
      "Berlin",
      "Paris",
      "Rome"
    ],

    correct: 1
  },

  {
    title: "Capital of Spain?",

    answers: [
      "Madrid",
      "Lisbon",
      "London"
    ],

    correct: 0
  },

  {
    title: "Capital of Norway?",

    answers: [
      "Oslo",
      "Stockholm",
      "Copenhagen"
    ],

    correct: 0
  },

  {
    title: "Capital of Finland?",

    answers: [
      "Reykjavik",
      "Helsinki",
      "Dublin"
    ],

    correct: 1
  },

  {
    title: "Brazil is in which continent?",

    answers: [
      "South America",
      "Europe",
      "Asia"
    ],

    correct: 0
  },

  {
    title: "Japan is in which continent?",

    answers: [
      "Africa",
      "Asia",
      "South America"
    ],

    correct: 1
  },

  {
    title: "Italy capital is?",

    answers: [
      "Rome",
      "Paris",
      "Madrid"
    ],

    correct: 0
  },

  {
    title: "Germany capital is?",
    answers: ["Vienna","Bern","Berlin"], correct: 2
  },
{
    title: "Egypt is in which continent?",
    answers: [
      "Africa",
      "Europe",
      "Oceania"
    ],
    correct: 0
}
];
/* För HTML! */
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var question = document.getElementById("qText");
var b1 = document.getElementById("a0");
var b2 = document.getElementById("a1");
var b3 = document.getElementById("a2");
var finalText = document.getElementById("finalText");
var startBtn = document.getElementById("btnStart");
var againBtn = document.getElementById("againBtn");


/* Variabler, var var var var, tung tung tung sahur. */
var number = 0;
var score = 0;

/* Start knapp */
startBtn.onclick = function () {

  start.classList.add("hide");

  quiz.classList.remove("hide");

  showQuestion();
};
/* Visa fråga */
function showQuestion() {

  question.innerText = questions[number].title;

  b1.innerText = questions[number].answers[0];

  b2.innerText = questions[number].answers[1];

  b3.innerText = questions[number].answers[2];
}


/* Knapp 1 */
b1.onclick = function () {
  if (questions[number].correct == 0) {
    score++;
   }
  nextQuestion();
};

/* Knapp 2 */
b2.onclick = function () {
  if (questions[number].correct == 1) {
    score++;
  }
  nextQuestion();
};
/* Knapp 3 */
b3.onclick = function () {
  if (questions[number].correct == 2) {
score++;
}
nextQuestion();
};
/* Nästa fråga */
function nextQuestion() {

  number++;

if (number >= questions.length) {
  quiz.classList.add("hide");
  result.classList.remove("hide");
  finalText.innerText = "You got " + score + " correct!";
}
else {
  showQuestion();
}

}
/* Play again */
againBtn.onclick = function () {
  result.classList.add("hide");
  start.classList.remove("hide");
  
  number = 0;
  score = 0;
}