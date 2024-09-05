const results = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Python programming language gets its name from the British comedy group Monty Python.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "For loops",
    incorrect_answers: ["If Statements", "Do-while loops", "While loops"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The programming language Python is based off a modified version of JavaScript.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
];

let punteggio = 0;
let boxQuestion = document.querySelector(".boxQuestion");
let boxAnswer = document.querySelector(".boxButton");
let h1domande = document.querySelector("h1");
let boxResult = document.querySelector(".buttonResults");

let footer = document.querySelector("footer");
let span = document.createElement("span");

let tempoProva = document.querySelector(".timer");
let timerElement = document.createElement("p");
let second = document.querySelector(".second");
second.appendChild(timerElement);

let circle = document.querySelector(".colorCircle");

//contatore per le domande che si incrementa
let questionCount = 0;

//numero di odmande massime nell'array
const maxQuestions = 10;

//timer per le domande
const timePerQuestion = 60;

//funzione per il timer
let countdown;
function startTimer() {
  let timeLeft = timePerQuestion;

  timerElement.innerText = `  ${timeLeft}`;

  countdown = setInterval(() => {
    timeLeft--;

    timerElement.innerText = ` ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(countdown); // clearInterval(countdown) serve a resettare il timer e a farlo ripartire
      if (questionCount < maxQuestions) {
        quiz();
      } else {
        tempoProva.innerHTML = ""; //serve a rimuovere il timer quando si risponde all'ultima domanda
        showResultsButton();
      }
    }
  }, 1000);
}

let risposteUtente = [];
let risposteCorrette = [];
let domandeUtente = [];
localStorage.setItem("risposteCorrette", JSON.stringify(risposteCorrette));
localStorage.setItem("domandeUtente", JSON.stringify(domandeUtente));
localStorage.setItem("risposteUtente", JSON.stringify(risposteUtente));
console.log(risposteUtente);

function quiz() {
  if (questionCount >= maxQuestions || results.length === 0) {
    return;
  }

  questionCount++;
  clearInterval(countdown);

  let domandeRandom = Math.floor(Math.random() * results.length);
  let questionData = results[domandeRandom];
  results.splice(domandeRandom, 1);

  h1domande.innerText = questionData.question;
  boxQuestion.innerHTML = "";
  boxQuestion.appendChild(h1domande);

  let allAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
  questionsArray(allAnswers);

  let questionCorrect = questionData.correct_answer;
  let questionIncorrect = questionData.incorrect_answers;

  boxAnswer.innerHTML = "";
  allAnswers.forEach((answer) => {
    let button = document.createElement("button");
    button.classList.add("styleButton");
    button.innerText = answer;

    button.addEventListener("click", () => {
      clearInterval(countdown);
      circle.classList.remove("colorCircle");
      void circle.offsetWidth;

      const buttons = document.querySelectorAll(".styleButton");
      buttons.forEach((btn) => {
        btn.disabled = true;
        if (btn.innerText === questionData.correct_answer) {
          btn.classList.add("green");
        } else {
          btn.classList.add("red");
        }
      });

      risposteUtente.push(answer);

      if (answer === questionCorrect) {
        punteggio++;
        localStorage.setItem("punteggio", punteggio);
      }

      setTimeout(() => {
        circle.classList.add("colorCircle");

        if (questionCount < maxQuestions) {
          domandeUtente.push(questionData.question);
          risposteCorrette.push(questionCorrect);
          quiz();
          return domandeUtente;
        } else {
          tempoProva.innerHTML = "";
          window.location.href = "../Results.html";
        }
      }, 700);
    });

    boxAnswer.appendChild(button);
  });

  startTimer();
  let containerQuestionString = document.querySelector(".domande");
  let questionString = document.querySelector(".counterQuestion");

  span.innerText = "/10";
  footer.appendChild(span);

  questionString.innerText = `QUESTION ${questionCount} `;
  containerQuestionString.appendChild(questionString);
}

function questionsArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

quiz();
