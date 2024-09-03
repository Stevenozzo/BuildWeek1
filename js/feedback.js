const stars = document.querySelectorAll(".star svg");

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

let valutazione = [];

function handleStarClick(event) {
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
  star.addEventListener("click", handleStarClick);
});

let button = document.querySelector(".styleButton");
let footer = document.querySelector("footer");
let h2 = document.querySelector("h2");
button.addEventListener("click", function (event) {
  const value = event.currentTarget.getAttribute("data-value");
  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= 6) {
    } else {
      h2.innerText = "Grazie mille 😊😁";
      footer.appendChild(h2);
    }
  });
});
