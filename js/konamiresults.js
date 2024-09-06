//localStorage.getItem (salva un valore in una cella di memoria del browser) serve a richiamare la variabile punteggio salvata nella question page
const punteggioSalvato = 10;
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
  colorCircle.style.strokeDasharray = `${
    circumference - offset
  } ${circumference}`;

  //testo all'interno del grafico
  if (percentualeCorretta >= 51) {
    let h2 = document.createElement("h2");
    h2.innerText = "Congratulations!";
    let h3 = document.createElement("h3");
    let paragrafoCerchio = document.createElement("img");
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
