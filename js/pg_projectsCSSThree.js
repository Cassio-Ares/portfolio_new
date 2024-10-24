import { mockProjectCssThree } from "../mock/mock_projectCssThree.js";

window.addEventListener("load", () => {
  const pg_project = document.getElementById("pg_projectsCssThree");

  mockProjectCssThree.forEach((project) => {
    const projectDiv = document.createElement("div");
    const containerProjects = document.createElement("div");
    containerProjects.classList.add("container_projects");

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects");

    let img = document.createElement("img");
    img.classList.add("img_projects");

    img.src = `./public/imgProjects/${project.imagem}`;
    img.alt = project.name;

    projectsDiv.appendChild(img);
    containerProjects.appendChild(projectsDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description_project");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.description;

    descriptionDiv.appendChild(title);
    descriptionDiv.appendChild(description);

    const techTitle = document.createElement("h4");
    techTitle.textContent = "Tecnologias";

    const tecnologiasDiv = document.createElement("div");
    tecnologiasDiv.classList.add("tecnologias");

    tecnologiasDiv.innerHTML = project.tecnologias;

    descriptionDiv.appendChild(techTitle);
    descriptionDiv.appendChild(tecnologiasDiv);

    containerProjects.appendChild(descriptionDiv);
    projectDiv.appendChild(containerProjects);

    pg_project.appendChild(projectDiv);

    const buttonContainer = document.createElement("div");

    if (project.link_do_git) {
      const gitButton = document.createElement("button");
      gitButton.classList.add("btn", "btn_git");

      const gitLink = document.createElement("a");
      gitLink.style.textDecoration = "none";
      gitLink.href = project.link_do_git;
      gitLink.target = "_blank";

      gitLink.innerHTML = `
        <span class="btn_Skew"></span>
        <span class="btn_text">GitHub</span>
      `;

      gitButton.appendChild(gitLink);
      buttonContainer.appendChild(gitButton);
    }

    // Verificação condicional para link_do_site
    if (project.link_do_site) {
      const siteButton = document.createElement("button");
      siteButton.classList.add("btn", "btn_site");

      const siteLink = document.createElement("a");
      siteLink.style.textDecoration = "none";
      siteLink.href = project.link_do_site;
      siteLink.target = "_blank";

      siteLink.innerHTML = `
      <span class="btn_Skew"></span>
      <span class="btn_text">Site</span>
    `;

      siteButton.appendChild(siteLink);
      buttonContainer.appendChild(siteButton);
    }

    pg_project.appendChild(buttonContainer); // Adiciona o container dos botões fora de descriptionDiv e containerProjects
  });
});
