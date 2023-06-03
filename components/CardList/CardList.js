import { cards } from "../../untils/cards.js";
import Card from "../Card/Card.js";

export default function CardList() {
  const cardList = document.createElement("main");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });
  return cardList;
}
