import { packages, favorites } from "./data.js";

const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};

// Create a card
const createPkgCard = (object) => {
  return `
  <div class="card" style="width: 40rem; gap:20px;">
    <div class="card-body">
      <h3 class="card-title">${object.name}</h3>
      <h4 class="card-description">${object.description}</h4>
      <h6>${object.type}</h6>
      <button class="btn rate-btn" data-id="${object.id}"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#f1f2f3" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg> Star</button>
    </div>
  </div>`;
};

const displayPackages = (array) => {
  let content = "";
  array.forEach((item) => {
    content += createPkgCard(item);
  });

  displayInDom("#packages-cnt", content);

  document.querySelectorAll(".rate-btn").forEach((button) => {
    button.addEventListener("click", favoritePackage);
  });
};

// Create new repository form
const packageForm = document.querySelector("#createPackage");

const newPackage = (e) => {
  e.preventDefault();
  // Create new repo
  const obj = {
    id: packages.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    language: "Javascript",
    type: "package",
    pinned: false,
  };
  packages.push(obj);
  displayPackages(packages);
  packageForm.reset();
};

packageForm.addEventListener("submit", newPackage);

// Display favorites
const displayFavorites = (array) => {
  let content = "";
  array.forEach((item) => {
    content += createPkgCard(item);
  });
  displayInDom("#pinned", content);

  document.querySelectorAll(".rate-btn").forEach((button) => {
    button.addEventListener("click", favoritePackage);
  });
};

const favoritePackage = (event) => {
  const id = parseInt(event.target.getAttribute("data-id"));
  const packageIndex = packages.findIndex((item) => item.id === id);
  if (packageIndex !== -1) {
    const pack = packages[packageIndex];
    pack.pinned = true;
    favorites.push(pack);
    packages.splice(packageIndex, 1);
  } else {
    const favIndex = favorites.findIndex((item) => item.id === id);
    if (favIndex !== -1) {
      const pkg = favorites[favIndex];
      pkg.pinned = false;
      packages.push(pkg);
      favorites.splice(favIndex, 1);
    }
  }
  displayPackages(packages);
  displayFavorites(favorites);
};

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

// Display cards when the screen loads
document.addEventListener("DOMContentLoaded", () => {
  displayPackages(packages);
  // displayProjects(projects);
  gsap.to(".btn", {
    backgroundColor: "#5941A9",
    color: "#E6AF2E",
  });
});

// Export functions if needed
// export { displayInDom };
