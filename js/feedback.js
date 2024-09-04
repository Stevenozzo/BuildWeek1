const stars = document.querySelectorAll(".star svg");
let valutazione = 0;
function hoverStars(event) {
  const value = event.currentTarget.getAttribute("data-value");

  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= parseInt(value)) {
      star.querySelector("path").setAttribute("fill", "#00FFFF");
    } else {
      star.querySelector("path").setAttribute("fill", "#131d63");
    }
  });
}

stars.forEach((star) => {
  star.addEventListener("mouseover", hoverStars);
});

function handleStarClick(event) {
  valutazione = event.currentTarget.getAttribute("data-value");

  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= parseInt(valutazione)) {
      star.querySelector("path").setAttribute("fill", "#00FFFF");
    } else {
      star.querySelector("path").setAttribute("fill", "#131d63");
    }
  });
}

stars.forEach((star) => {
  star.addEventListener("click", handleStarClick);
});

let button = document.querySelector(".styleButton");
let footer = document.querySelector("footer");
let h2 = document.querySelector("h2");

button.addEventListener("click", function (event) {
  const value = parseInt(event.currentTarget.getAttribute("data-value"));

  if (valutazione <= 6) {
    h2.innerText = "Scusaci miglioreremo...😢🥹";
    h2.classList.add("h2");
  } else {
    h2.innerText = "Grazie mille 😊😁";
    h2.classList.add("h2");
  }

  if (!footer.contains(h2)) {
    footer.appendChild(h2); // Aggiungi l'elemento h2 al footer, solo se non è già presente
  }
});
