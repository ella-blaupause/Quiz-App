import Header from "../components/Header/Header.js";
import CardList from "../components/CardList/CardList.js";

console.clear();

const root = document.getElementById("root");

root.append(Header(), CardList());
