const express = require('express');
const home = require('./controllers/home');
const admin = require('./controllers/admin')
const routes = express.Router();

routes.get("/", home.index);
routes.get("/sobre", home.about);
routes.get("/receitas", home.recipes);
routes.get("/receitas/:id", home.recipe);

routes.get("/admin/receitas", admin.index);
// routes.get("/admin/receitas/create", admin.create);
routes.get("/admin/receitas/:id", admin.show);
routes.get("/admin/receitas/:id/editar", admin.edit);
// routes.post("/admin/receitas", admin.post);
// routes.put("/admin/receitas", admin.put); 
// routes.delete("/admin/receitas", admin.delete);
module.exports = routes;