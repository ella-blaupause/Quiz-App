/* import { cards } from "../../untils/cards.js";
 */
export default function Card(props) {
  const card = document.createElement("section");
  card.classList.add("question-card");
  card.innerHTML = `<button class="bookmark__style" type="button" data-js="bookmark">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="64px"
    height="64px"
    viewBox="0 0 256 256"
    xml:space="preserve"
  >
    <defs></defs>
    <g
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 74.113 0 H 15.886 c -1.105 0 -2 0.895 -2 2 v 86 c 0 0.759 0.43 1.453 1.109 1.791 c 0.282 0.14 0.587 0.209 0.89 0.209 c 0.428 0 0.854 -0.138 1.208 -0.405 l 25.669 -19.432 c 1.324 -1.002 3.152 -1.002 4.476 0 l 25.668 19.432 c 0.606 0.458 1.418 0.533 2.098 0.196 c 0.68 -0.338 1.109 -1.032 1.109 -1.791 V 2 C 76.113 0.895 75.218 0 74.113 0 z"
        transform=" matrix(1 0 0 1 0 0) "
        stroke-linecap="round"
      />
    </g>
  </svg>
</button>
<p class="question" data-js="question"></p>
<button class="answer" type="button" data-js="answer-button">
  Antwort
</button>
<p hidden data-js="answer"></p>
<ul class="tag" data-js="tags">
</ul> `;

  const question = card.querySelector('[data-js="question"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("tag--style");
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  const bookmark = card.querySelector('[data-js="bookmark"]');

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--style-fill");
  });

  const answerButton = card.querySelector('[data-js="answer-button"]');

  answerButton.addEventListener("click", () => {
    if (answerButton.innerText === "Antwort") {
      answerButton.innerText = "Antwort verbergen";
      answer.hidden = false;
    } else {
      answerButton.innerText = "Antwort";
      answer.hidden = true;
    }
  });

  return card;
}
