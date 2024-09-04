/*const punteggioSalvato = localStorage.getItem("punteggio");

console.log(punteggioSalvato);
*/
let conteinerAll = document.querySelector(".container-all");
let questionCorrect = document.querySelector(".correct");
let cicrcle = document.querySelector(".cicrcle");
let questionWrong = document.querySelector(".wrong");
let containerText = document.querySelector(".containerText");
let punteggioFake = 8;
let totaleDomande = 10;
let punteggioSbagliatoFake = totaleDomande - punteggioFake;
let percentualeCorretta = 0;
let percentualeSbagliata = 0;
let colorCircle = document.querySelector(".colorCircle");
const calcoloPercentuale = function () {
  percentualeCorretta = (punteggioFake / totaleDomande) * 100;
  percentualeSbagliata = 100 - percentualeCorretta;
  let circumference = 2 * Math.PI * 160;
  let offset = circumference - (percentualeCorretta / 100) * circumference;

  colorCircle.style.strokeDasharray = `${circumference - offset} ${circumference}`;
  if (percentualeCorretta >= 51) {
    let h2 = document.createElement("h2");
    h2.innerText = "Congratulations!";
    let h3 = document.createElement("h3");
    h3.innerText = "You passed the exam.";
    h3.classList.add("passed");
    let paragrafoCerchio = document.createElement("p");
    paragrafoCerchio.innerText = `We'll send the certificate    
   in few minutes.
   Chech your email (including
    promotions/spam folder)`;
    paragrafoCerchio.classList.add("paragrafoCerchio");
    containerText.append(h2, h3, paragrafoCerchio);
    cicrcle.appendChild(containerText);
  } else {
    let h2 = document.createElement("h2");
    h2.innerText = "We are sorry";
    let h3 = document.createElement("h3");
    h3.innerText = "You did not pass the exam.";
    h3.classList.add("notPassed");
    let paragrafoCerchio = document.createElement("p");
    paragrafoCerchio.innerText = `you will be able
     to retake the
     exam next week`;
    paragrafoCerchio.classList.add("paragrafoCerchio");
    containerText.append(h2, h3, paragrafoCerchio);
    cicrcle.appendChild(containerText);
  }
  let testoCorrect = document.createElement("p");

  testoCorrect.innerText = "Correct";
  let percent = document.createElement("p");
  percent.classList.add("percent");
  percent.innerText = `${percentualeCorretta}%`;
  let numeroRisposte = document.createElement("p");
  numeroRisposte.classList.add("numRisposte");
  numeroRisposte.innerText = `${punteggioFake}/10 questions`;
  questionCorrect.append(testoCorrect, percent, numeroRisposte);
  let testoErrori = document.createElement("p");
  testoErrori.innerText = "Wrong";
  let percent2 = document.createElement("p");
  percent2.classList.add("percent");
  percent2.innerText = `${percentualeSbagliata}%`;
  let numeroRisposte2 = document.createElement("p");
  numeroRisposte2.innerText = `${punteggioSbagliatoFake}/10 questions`;
  numeroRisposte2.classList.add("numRisposte");
  questionWrong.append(testoErrori, percent2, numeroRisposte2);
};
console.log(calcoloPercentuale());
