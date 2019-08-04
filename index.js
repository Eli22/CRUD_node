const express = require("express");
const server = express();
server.use(express.json());

const projects = [];

const project = {
  id: null,
  title: null,
  tasks: []
};

//Adicionando um Projeto
server.post("/project", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { tasks } = req.body;

  project.id = id;
  project.title = title;
  project.tasks = tasks;

  projects.push(project);
  return res.json(projects);
});

server.listen(3000);

//listar todos os Projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//Alterar título do Projeto de acordo com ID
server.put("/projectChangeTitle/:index", (req, res) => {
  const { index } = req.params;
  const { title } = req.body;

  for (i = 0; i < projects.length; ++i) {
    if (project[i] == index) {
      console.log(project[i]);
      project[i].title = title;
    }
  }
  return res.json(projects);
});
