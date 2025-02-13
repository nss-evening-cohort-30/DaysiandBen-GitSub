import { displayInDom } from "./repos";
import { packages } from "./data";


let packageCard = () => {
  let domString  = '' 
  packages.forEach((item) =>  {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 id='pkgName' class="card-title">${item.title}</h5>
    <p id='pkgDescription'class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  })
  displayInDom("#cards-cnt", domString)
}

const newPackage = (e) => {
  e.preventDefault();
  //create new repo
  const newPackage = {
    id: packages.length + 1,
    name: document.querySelector("#pkgName").value,
    description: document.querySelector("#pkgDescription").value,
  };
  packages.push(newPackage);
  displayInDom("#cards-cnt", packages)
  repoForm.reset();
};

const packageForm = document.querySelector("#createPackage")

let packageEvents = () => {

packageForm.addEventListener("submit", newPackage);
const searchPkg = (event) => {
  const eventSearch = event.target.value.toLowerCase();
  const searchResult = packages.filter((item) => {
    return (
      item.name.toLowerCase().includes(eventSearch) ||
      item.description.toLowerCase().includes(eventSearch)
    );
  });
  displayInDom("#cards-cnt", searchResult)
};

document.querySelector("#search-bar").addEventListener("keyup", searchPkg);

document.addEventListener("DOMContentLoaded", () => {
  displayInDom("#cards-cnt", packages)
  // displayProjects(projects);
});
}

export { packageCard, newPackage, packageEvents }
