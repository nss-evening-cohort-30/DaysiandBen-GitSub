// import { repos, projects, packages } from "./data.js";

// // // Create a Project
// // const createProject = (object) => {
// //   return `
// //   <div class="card" style="width: 40rem; gap:20px;">
// //     <div class="card-body">
// //       <h3 class="card-title">${object.name}</h3>
// //       <h4 class="card-description">${object.description}</h4>
// //       <h6>${object.type}</h6>
// //     </div>
// //   </div>`;
// // };

// // const displayProjects = (array) => {
// //   let content = "";
// //   array.forEach((item) => {
// //     content += createProject(item);
// //   });

// //   displayInDom("#projects-cnt", content);
// // };

// // Display in DOM utility function
// const displayInDom = (divID, content) => {
//   const findDiv = document.querySelector(divID);
//   findDiv.innerHTML = content;
// };
// // //create new project form
// // const projectForm = document.querySelector("#createProject");

// // const newProject = (e) => {
// //   e.preventDefault();
// //   //create new project
// //   const project = {
// //     id: projects.length + 1,
// //     name: document.querySelector("#name").value,
// //     description: document.querySelector("#description").value,
// //     type: "project",
// //   };
// //   projects.push(project);
// //   displayProjects(projects);
// //   projectForm.reset();
// // };

// // projectForm.addEventListener("submit", newProject);
