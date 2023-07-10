function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
}

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleDarkMode);
