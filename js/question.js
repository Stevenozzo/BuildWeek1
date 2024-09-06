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
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The Python programming language gets its name from the British comedy group Monty Python.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "For loops",
    incorrect_answers: ["If Statements", "Do-while loops", "While loops"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The programming language Python is based off a modified version of JavaScript.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },

  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Windows NT is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: [
      "December 17, 1996",
      "November 12, 1990",
      "November 24, 1995",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
    incorrect_answers: [
      "Midnight, July 4, 1976",
      "Midnight on the creator of Unix's birthday",
      "Midnight, July 4, 1980",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "How many bits make up the significand portion of a single precision floating point number?",
    correct_answer: "23",
    incorrect_answers: ["8", "53", "15"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: [
      "Common Language Input",
      "Control Line Interface",
      "Common Language Interface",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: [
      "Hashing algorithm",
      "Asymmetric encryption",
      "Stream cipher",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    typ: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "According to DeMorgan's Theorem, the Boolean expression (AB) is equivalent to:",
    correct_answer: "A + B",
    incorrect_answers: ["AB + BA", "AB", "AB + AB"],
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

let circle = document.getElementById("cerchio1");

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

let selezioneDifficolta = document.querySelector(".selezione-difficolta");

let buttonDifficoltaEasy = document.createElement("button");

let buttonDifficoltaMedium = document.createElement("button");

let buttonDifficoltaHard = document.createElement("button");

let buttonsDIfficolta = [
  buttonDifficoltaEasy,
  buttonDifficoltaMedium,
  buttonDifficoltaHard,
];

let selzioneDiff = "";

const selezioneDifficoltaUtente = function () {
  buttonDifficoltaEasy.innerText = "easy";
  buttonDifficoltaEasy.classList.add("buttonDifficolta");

  buttonDifficoltaMedium.innerText = "medium";
  buttonDifficoltaMedium.classList.add("buttonDifficolta");

  buttonDifficoltaHard.innerText = "hard";
  buttonDifficoltaHard.classList.add("buttonDifficolta");

  selezioneDifficolta.append(
    buttonDifficoltaEasy,
    buttonDifficoltaMedium,
    buttonDifficoltaHard
  );

  buttonsDIfficolta.forEach((but) => {
    but.addEventListener("click", () => {
      selzioneDiff = but.innerText;
      quiz();
      circle.classList.add("colorCircle");
      selezioneDifficolta.classList.add("selezione-diff");
    });
  });
};

selezioneDifficoltaUtente();

let risposteUtente = [];
let risposteCorrette = [];
let domandeUtente = [];

function quiz() {
  if (questionCount >= maxQuestions || results.length === 0) {
    return;
  }

  clearInterval(countdown);

  if (
    selzioneDiff === buttonDifficoltaEasy.innerText ||
    selzioneDiff === buttonDifficoltaMedium.innerText ||
    selzioneDiff === buttonDifficoltaHard.innerText
  ) {
    let questionData;

    do {
      let domandeRandom = Math.floor(Math.random() * results.length);
      questionData = results[domandeRandom];
      results.splice(domandeRandom, 1);
    } while (questionData.difficulty !== selzioneDiff && results.length > 0);

    if (questionData.difficulty === selzioneDiff.toLowerCase()) {
      questionCount++;

      h1domande.innerText = questionData.question;
      boxQuestion.innerHTML = "";
      boxQuestion.appendChild(h1domande);

      let allAnswers = [
        questionData.correct_answer,
        ...questionData.incorrect_answers,
      ];
      questionsArray(allAnswers);

      let questionCorrect = questionData.correct_answer;

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
          localStorage.setItem(
            "risposteUtente",
            JSON.stringify(risposteUtente)
          );

          if (answer === questionCorrect) {
            punteggio++;
            localStorage.setItem("punteggio", punteggio);
          }

          setTimeout(() => {
            circle.classList.add("colorCircle");

            if (questionCount < maxQuestions) {
              domandeUtente.push(questionData.question);
              risposteCorrette.push(questionCorrect);
              localStorage.setItem(
                "domandeUtente",
                JSON.stringify(domandeUtente)
              );
              localStorage.setItem(
                "risposteCorrette",
                JSON.stringify(risposteCorrette)
              );
              quiz();
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
    } else {
      console.log("Non ci sono più domande con la difficoltà desiderata.");
    }
  }
}

function questionsArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
