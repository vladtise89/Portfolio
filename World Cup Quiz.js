let questions = [
  {
    question: "Who won the 1966 World Cup?",
    answers: [
      { text: "England", correct: true },
      { text: "Italy", correct: false },
      { text: "West Germany", correct: false },
      { text: "France", correct: false },
    ],
  },

  {
    question:
      "Which player was the highest scorer at the 1998 World Cup with 6 goals?",
    answers: [
      { text: "Zinedine Zidane", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Davor Suker", correct: true },
      { text: "Gabriel Batistuta", correct: false },
    ],
  },
  {
    question:
      "Which player was the first to score a hat-trick in a World Cup final?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Geoff Hurst", correct: true },
      { text: "Mario Kempes", correct: false },
      { text: "Kylian Mbappé", correct: false },
    ],
  },
  {
    question:
      "Which player is the all-time top goalscorer of the FIFA World Cup, with 15 goals?",
    answers: [
      { text: "Gerd Muller", correct: false },
      { text: "Just Fontaine", correct: false },
      { text: "Eusebio", correct: false },
      { text: "Miroslav Klose", correct: true },
    ],
  },
  {
    question: "Which team won the first World Cup, played in 1930?",
    answers: [
      { text: "Uruguay", correct: true },
      { text: "France", correct: false },
      { text: "Italy", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "Which tournament debuted with footballs produced by Adidas?",
    answers: [
      { text: "World Cup Mexico, 1970", correct: true },
      { text: "World Cup France, 1998", correct: false },
      { text: "World Cup Sweden, 1958", correct: false },
      { text: "World Cup Argentina, 1978", correct: false },
    ],
  },
  {
    question: "Which team lost against Spain in the 2010 FIFA World Cup Final?",
    answers: [
      { text: "Netherlands", correct: true },
      { text: "England", correct: false },
      { text: "Poland", correct: false },
      { text: "France", correct: false },
    ],
  },
  {
    question:
      "Which player scored in the 1974 Final from the penalty spot for Netherlands against Germany?",
    answers: [
      { text: "Ruud Krol", correct: false },
      { text: "Johan Cruyff", correct: false },
      { text: "Johan Neeskens", correct: true },
      { text: "Rob Rensenbrink", correct: false },
    ],
  },
  {
    question:
      "What was the name of the official ball for the 2010 World Cup from South Africa?",
    answers: [
      { text: "Tango", correct: false },
      { text: "Fevernova", correct: false },
      { text: "Telstar", correct: false },
      { text: "Jabulani", correct: true },
    ],
  },
  {
    question: "Which player was voted the best player at the 2018 World Cup?",
    answers: [
      {
        text: "Cristiano Ronaldo",
        correct: false,
      },
      {
        text: "Luka Modrić",
        correct: true,
      },
      {
        text: "Kylian Mbappé",
        correct: false,
      },
      {
        text: "Angel Di Maria",
        correct: false,
      },
    ],
  },
];

let correctAnswers = 0;
let randomizeQuestions;
let currentQuestion = 0;

const startBtn = document.getElementById("start-button");
const questionContainerEl = document.getElementById("question-container");
const currentQuestionCount = document.querySelector("#current-question");
const correctAnswersCounter = document.getElementById("correct-answers");
const questionElement = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const finalDiv = document.querySelector(".final");
const resultScreen = document.querySelector(".result");
const finalScore = document.querySelector(".score");

startBtn.addEventListener("click", startGame);

function restartGame() {
  window.location.reload();
  return false;
}
restartButton.addEventListener("click", function () {
  restartButton.classList.add("hide");
  finalDiv.classList.add("hide");
  restartGame();
});

function startGame() {
  questionContainerEl.classList.remove("hide");

  console.log("started");
  startBtn.classList.add("hide");
  //used math random to shuffle questions and not have them in the same order all the time
  randomizeQuestions = questions.sort(() => Math.random() - 0.5);
  document.querySelector(".status").classList.remove("hide");
  document.querySelector(".correct").classList.remove("hide");
  document.querySelector("#total-questions").innerHTML =
    randomizeQuestions.length;

  getNextQuestion();
  nextButton.addEventListener(
    "click",
    function () {
      nextPressed();
    },
    false
  );
}

function getNextQuestion() {
  resetState();

  if (currentQuestion <= randomizeQuestions.length - 1) {
    //if quiz is still in progress
    currentQuestionCount.innerHTML = currentQuestion + 1;
    showQuestion(randomizeQuestions[currentQuestion]);
    currentQuestion++;
  } else {
    //if quiz is over
    document.querySelector(".score").classList.remove("hide");
    document.querySelector(".controls").classList.add("hide");
    document.querySelector(".correct").classList.add("hide");
    document.querySelector(".status").classList.add("hide");
    restartButton.classList.remove("hide");
    questionContainerEl.classList.add("hide");

    showResult();
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

//clear answer 1, answer 2, answer 3, answer 4
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

// answer button is clicked
function selectAnswer(e) {
  nextButton.classList.remove("hide");
  //added selected class to show which button was clicked on
  var elements = document.getElementsByClassName("btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("selected");
  }
  e.target.classList.add("selected");
  //verified if clicked answer is correct and counter is updated
}

// Next button is pressed
function nextPressed() {
  const selectedBtn = document.querySelector(".selected");
  let correct = selectedBtn?.dataset.correct;
  if (correct) {
    correctAnswers++;
    correctAnswersCounter.innerHTML = correctAnswers;
  }
  getNextQuestion();
}
// show final result
function showResult() {
  resultScreen.style.display = "block";
  questionContainerEl.style.display = "none";
  if (correctAnswers === questions.length) {
    finalScore.innerHTML = `${correctAnswers} out of ${questions.length} correct answers! You are a quiz whizz! `;
  } else if (correctAnswers > 7) {
    finalScore.innerHTML = `${correctAnswers} out of ${questions.length} correct answers. Good job!`;
  } else {
    finalScore.innerHTML = `${correctAnswers} out of ${questions.length} correct answers. Good luck next time!`;
  }
}

//trophies
var img = document.createElement("img");
img.src = "./img/Old trophy.jpg";
var src = document.getElementById("old-worldcup-trophy");
src.appendChild(img);

var img = document.createElement("img");
img.src = "./img/New trophy.jpg";
var src = document.getElementById("new-worldcup-trophy");
src.appendChild(img);
