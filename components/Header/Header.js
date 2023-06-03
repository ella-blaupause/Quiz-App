export default function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `<h1>Quiz App</h1>`;

  return header;
}
