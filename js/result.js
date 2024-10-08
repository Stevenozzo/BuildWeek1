//localStorage.getItem (salva un valore in una cella di memoria del browser) serve a richiamare la variabile punteggio salvata nella question page
const arrayRisposteCorrette = JSON.parse(localStorage.getItem("risposteCorrette")) || [];
const arrayDomande = JSON.parse(localStorage.getItem("domandeUtente")) || [];
const arrayRisposteUtente = JSON.parse(localStorage.getItem("risposteUtente")) || [];
const punteggioSalvato = localStorage.getItem("punteggio");
let conteinerAll = document.querySelector(".container-all");
let questionCorrect = document.querySelector(".correct");
let cicrcle = document.querySelector(".cicrcle");
let questionWrong = document.querySelector(".wrong");
let containerText = document.querySelector(".containerText");

//variabili per il il calcolo del punteggio
let totaleDomande = 10;
let punteggioSbagliato = totaleDomande - punteggioSalvato;
let percentualeCorretta = 0;
let percentualeSbagliata = 0;
let colorCircle = document.querySelector(".colorCircle");

//funzione per il calcolo %
const calcoloPercentuale = function () {
  percentualeCorretta = (punteggioSalvato / totaleDomande) * 100;
  percentualeSbagliata = 100 - percentualeCorretta;

  //calcolo della circonferenza
  let circumference = 2 * Math.PI * 160;

  //calcolo percentuale di riempimento del colore (blu è quello variabile)
  let offset = circumference - (percentualeCorretta / 100) * circumference;
  colorCircle.style.strokeDasharray = `${circumference - offset} ${circumference}`;

  //testo all'interno del grafico
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

  //stampa risultati corretti su 10 domande
  let testoCorrect = document.createElement("p");

  testoCorrect.innerText = "Correct";
  let percent = document.createElement("p");
  percent.classList.add("percent");
  percent.innerText = `${percentualeCorretta}%`;
  let numeroRisposte = document.createElement("p");
  numeroRisposte.classList.add("numRisposte");
  numeroRisposte.innerText = `${punteggioSalvato}/10 questions`;
  questionCorrect.append(testoCorrect, percent, numeroRisposte);

  //stampa risultati errati su 10 domande
  let testoErrori = document.createElement("p");
  testoErrori.innerText = "Wrong";
  let percent2 = document.createElement("p");
  percent2.classList.add("percent");
  percent2.innerText = `${percentualeSbagliata}%`;
  let numeroRisposte2 = document.createElement("p");
  numeroRisposte2.innerText = `${punteggioSbagliato}/10 questions`;
  numeroRisposte2.classList.add("numRisposte");
  questionWrong.append(testoErrori, percent2, numeroRisposte2);
};
calcoloPercentuale();

//evento bottone che ci porta al feedback
let button = document.querySelector(".rate-btn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../Feedbackpage.html";
});
// creazione feedback risposte
let containerListaDomande = document.querySelector(".listaDomande");
let listarisposte = document.querySelector(".listarisposte");

for (let i = 0; i < arrayDomande.length; i++) {
  let domandaElem = document.createElement("h3");
  domandaElem.innerText = `Domanda: ${arrayDomande[i]}`;
  domandaElem.classList.add("textDomande");

  let rispostaUtenteElem = document.createElement("p");

  rispostaUtenteElem.innerText = `Risposta utente: ${arrayRisposteUtente[i]}❌`;
  rispostaUtenteElem.classList.add("textRisposteUtente");
  if (arrayRisposteCorrette[i] === arrayRisposteUtente[i]) {
    rispostaUtenteElem.classList.add("textRisposteCorrette");
    rispostaUtenteElem.innerText = `Risposta utente: ${arrayRisposteUtente[i]} ✅`;
  }
  let rispostaCorrette = document.createElement("p");
  rispostaCorrette.innerText = `Risposta corretta: ${arrayRisposteCorrette[i]}`;
  rispostaCorrette.classList.add("textRisposteCorrette");

  containerListaDomande.appendChild(domandaElem);
  containerListaDomande.appendChild(rispostaUtenteElem);
  containerListaDomande.appendChild(rispostaCorrette);
}
