console.clear();

const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark);

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--style-fill");
});
