import { favorites } from "./data.js";
import { displayFavorites } from "./packages.js"
import { displayFavs } from "./repos.js" 
import { displayFavs } from "./projects.js"


const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};


let displayOverview = () => {
    displayFavorites()
    displayFavs()
    displayFavs()


   
}


document.addEventListener("DOMContentLoaded", () => {
  displayInDom('#main', displayOverview);
});
