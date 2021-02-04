const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const data = require("./src/database/data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", (req, res) => {
  res.render("index", { data });
});

server.get("/sobre", (req, res) => {
  res.render("about");
});

server.get("/receitas", (req, res) => {
  res.render("recipes", { data });
});

server.get("/receitas/:id", function (req, res) {
  const recipeIndex = req.params.id;
  const recipe = data.find((recipe) => {
    return recipe.id == recipeIndex;
  });

  if (!recipe) {
    return res.send("Receita não encontrada!")
  }

  res.render("recipe", { data: recipe });
});

server.listen(5000, () => {
  console.log("Server is running!");
});