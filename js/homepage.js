let button = document.querySelector(".button");
button.addEventListener("click", (event) => {
  event.preventDefault();

  let checkbox = document.querySelector(".checkbox");
  if (checkbox.checked) {
    window.location.href = "../benchmark.html";
  } else {
    alert("You NEED to checked the checkbox.");
  }
});
