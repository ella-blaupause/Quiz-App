console.clear();

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.innerText === "Antwort") {
    answerButton.innerText = "Antwort verbergen";
    answer.hidden = false;
  } else {
    answerButton.innerText = "Antwort";
    answer.hidden = true;
  }
});
