import { favorites } from "./data.js";

const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};

// Create a card
const createCard = (object) => {
  return `
  <div class="card" style="width: 40rem; gap:20px;">
    <div class="card-body">
      <h3 class="card-title">${object.name}</h3>
      <h4 class="card-description">${object.description}</h4>
      <h5>${object.language}</h5>
      <h6>${object.type}</h6>
    </div>
  </div>`;
};

const displayCards = (array) => {
  let content = "";
  array.forEach((item) => {
    content += createCard(item);
  });

  displayInDom("#cards-cnt", content);
};

//create new Favorite form
const favForm = document.querySelector("#createProject");

const newPin = (e) => {
  e.preventDefault();
  const fav = {
    id: favorites.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    language: "Javascript",
    type: "project",
    pinned: true,
  };
  favorites.push(fav);
  displayCards(favorites);
  favForm.reset();
};

favForm.addEventListener("submit", newPin);

//display cards when the screen loads
document.addEventListener("DOMContentLoaded", () => {
  displayCards(favorites);
});
