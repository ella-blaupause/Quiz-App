console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggleDark = document.querySelector('[data-js="toggle-dark"]');

toggleDark.addEventListener("click", () => {
  toggleDark.classList.toggle("switch-button--dark");
  bodyElement.classList.toggle("dark");
});
