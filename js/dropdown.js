window.addEventListener("load", () => {
  // Seleciona o dropdown
  const dropDown = document.getElementById("dropDown");
  const projectList = document.getElementById("project-list");

  // Evento de clique para alternar a exibição do dropdown
  document.getElementById("projetos").addEventListener("click", (e) => {
    e.preventDefault();

    // Alterna a visibilidade do dropdown
    dropDown.classList.toggle("show");
  });

  // Fecha o dropdown e navega para a seção correta ao clicar em um item

  projectList.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (e) => {
  
      dropDown.classList.remove("show");

      // Redireciona para a seção correspondente
      // `e.target.getAttribute('href')` captura o link do item clicado

      const sectionId = e.target.getAttribute("href");
      window.location.href = sectionId;
    });
  });
});
