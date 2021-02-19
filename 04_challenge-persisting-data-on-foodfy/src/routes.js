const express = require('express');
const home = require('./app/controllers/home');
const admin = require('./app/controllers/admin');
const chefs = require('./app/controllers/chefs');

const routes = express.Router();

routes.get("/", home.index);
routes.get("/sobre", home.about);
routes.get("/receitas", home.recipes);
routes.get("/receitas/:id", home.recipe);

routes.get("/admin/receitas", admin.index);
routes.get("/admin/receitas/nova", admin.create);
routes.get("/admin/receitas/:id", admin.show);
routes.get("/admin/receitas/:id/editar", admin.edit);
routes.post("/admin/receitas", admin.post);
routes.put("/admin/receitas", admin.put); 
routes.delete("/admin/receitas", admin.delete);

routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/novo", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);
routes.get("/admin/chefs/:id/editar", chefs.edit);
routes.post("/admin/chefs", chefs.post);
routes.put("/admin/chefs", chefs.put); 
routes.delete("/admin/chefs", chefs.delete);
module.exports = routes;