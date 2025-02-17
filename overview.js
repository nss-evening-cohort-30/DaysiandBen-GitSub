import { favorites } from "./data.js";
import { displayFavorites } from "./packages.js"
import { displayFavs } from "./repos.js" 
import { displayFavs } from "./projects.js"


const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};


let displayOverview = () => {
    let content = `<h2>Something something</h2>`
    displayInDom('#main', content)
}



document.querySelector('#overview').addEventListener('click', displayOverview)
