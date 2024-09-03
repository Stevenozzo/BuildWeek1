const stars = document.querySelectorAll(".star svg");

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
