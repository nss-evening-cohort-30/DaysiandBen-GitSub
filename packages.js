// import { displayInDom } from "./repos";
// import { packages } from "./data";


// let packageCard = (arr) => {
//   let domString  = '' 
//   for (item of arr) {
//     domString += `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 id='pkgName' class="card-title">${item.name}</h5>
//     <p id='pkgDescription'class="card-text">${item.description}</p>
//     <a href="#" data-id=${item.id} class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//   }
// displayInDom("#packages-cnt", domString)
// }

// const newPackage = (e) => {
//   e.preventDefault();
//   //create new repo
//   const objPackage = {
//     id: packages.length + 1,
//     name: document.querySelector("#pkgName").value,
//     description: document.querySelector("#pkgDescription").value,
//   };
//   packages.push(objPackage);
//   displayInDom("#packages-cnt", packages)
//   packageForm.reset();
// };

// const packageForm = document.querySelector("#createPackage")



// packageForm.addEventListener("submit", newPackage);
// // const searchPkg = (event) => {
// //   const eventSearch = event.target.value.toLowerCase();
// //   const searchResult = packages.filter((item) => {
// //     return (
// //       item.name.toLowerCase().includes(eventSearch) ||
// //       item.description.toLowerCase().includes(eventSearch)
// //     );
// //   });
//   displayInDom("#packages-cnt", searchResult)


// document.querySelector("#search-bar").addEventListener("keyup", searchPkg);

// document.addEventListener("DOMContentLoaded", () => {
//   displayInDom("#packages-cnt", packages)
//   // displayProjects(projects);
// });


// packageCard(packages)
// newPackage()
// packageEvents()

// export { packageCard, newPackage, packageEvents }

import { packages } from "./data.js";
const renderToDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};

// Create a card
const createPkgCard = (object) => {
  // Create keywords list items
  return `
  <div class="card" style="width: 40rem; gap:20px;">
    <div class="card-body">
      <h3 class="card-title">${object.name}</h3>
      <h4 class="card-description">${object.description}</h4>
      <h6>${object.type}</h6>
    </div>
  </div>`;
};
;

const displayPackages = (array) => {
  let content = "";
  array.forEach((item) => {
    content += createPkgCard(item);
  });

  renderToDom("#packages-cnt", content);
};

// Display in DOM utility function


//create new repository form
const packageForm = document.querySelector("#createPackage");

const newPackage = (e) => {
  e.preventDefault();
  //create new repo
  const obj = {
    id: packages.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    language: "Javascript",
    type: "package"
  };
  packages.push(obj);
  displayPackages(packages);
  packageForm.reset();
};

packageForm.addEventListener("submit", newPackage);

// Search bar

const search = (event) => {
  const eventSearch = event.target.value.toLowerCase();
  const searchResult = packages.filter((item) => {
    return (
      item.name.toLowerCase().includes(eventSearch) ||
      item.description.toLowerCase().includes(eventSearch)
    );
  });
  displayPackages(searchResult);
};

document.querySelector("#search-bar").addEventListener("keyup", search);

//display cards when the screen loads
document.addEventListener("DOMContentLoaded", () => {
  displayPackages(packages);
  // displayProjects(projects);
});

// export{ displayInDom }
