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
    question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: ["&#039;If&#039; Statements", "&#039;Do-while&#039; loops", "&#039;While&#039; loops"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
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
boxAnswer.classList.add("boxButton");
let h1domande = document.querySelector("h1");

let domandeRandom = 0;
const quiz = function () {
  for (let i = 0; i < results.length; i++) {
    domandeRandom = Math.floor(Math.random() * results.length);
    h1domande.innerText = results[domandeRandom].question;
    boxQuestion.appendChild(h1domande);
  }
  if (results[domandeRandom].type === "multiple") {
    let button1 = document.createElement("button");
    button1.classList.add("styleButton");
    let button2 = document.createElement("button");
    button2.classList.add("styleButton");
    let button3 = document.createElement("button");
    button3.classList.add("styleButton");
    let button4 = document.createElement("button");
    button4.classList.add("styleButton");
    boxAnswer.append(button1, button2, button3, button4);
  } else {
    let button1 = document.createElement("button");
    button1.classList.add("styleButton");
    let button2 = document.createElement("button");
    button2.classList.add("styleButton");
    boxAnswer.append(button1, button2);
  }
};
console.log(quiz());
