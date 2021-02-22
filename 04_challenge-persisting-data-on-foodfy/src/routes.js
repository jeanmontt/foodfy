const express = require('express');
const home = require('./app/controllers/home');
const recipes = require('./app/controllers/recipes');
const chefs = require('./app/controllers/chefs');

const routes = express.Router();

routes.get("/", home.index);
routes.get("/sobre", home.about);
routes.get("/receitas", home.recipes);
routes.get("/receitas/:id", home.recipe);
routes.get("/search", home.search);
routes.get("/chefs", home.chefs);

routes.get("/admin/receitas", recipes.index);
routes.get("/admin/receitas/nova", recipes.create);
routes.get("/admin/receitas/:id", recipes.show);
routes.get("/admin/receitas/:id/editar", recipes.edit);
routes.post("/admin/receitas", recipes.post);
routes.put("/admin/receitas", recipes.put);
routes.delete("/admin/receitas", recipes.delete);

routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/novo", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);
routes.get("/admin/chefs/:id/editar", chefs.edit);
routes.post("/admin/chefs", chefs.post);
routes.put("/admin/chefs", chefs.put);
routes.delete("/admin/chefs", chefs.delete);
module.exports = routes;