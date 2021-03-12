const Recipe = require("../models/Recipe");

module.exports = {
  index(req, res) {
    Recipe.all((recipes) => {
      return res.render("admin/recipes/index", {
        recipes
      });
    });
  },

  create(req, res) {
    Recipe.chefsSelectOptions((options) => {
      return res.render("admin/recipes/create", {
        chefsOptions: options
      });
    });
  },

  show(req, res) {
    Recipe.find(req.params.id, (recipe) => {
      if (!recipe) return res.send("Receita não encontrada!");

      return res.render("admin/recipes/show", {
        recipe
      });
    });
  },

  edit(req, res) {
    Recipe.find(req.params.id, (recipe) => {
      if (!recipe) return res.send("Recipe not found!");

      Recipe.chefsSelectOptions((options) => {
        return res.render("./admin/recipes/edit", {
          recipe,
          chefsOptions: options
        });
      });
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor, preencha todo os campos!");
      }
    }

    Recipe.create(req.body, (recipe) => {
      return res.redirect(`/admin/receitas/${recipe.id}`);
    });
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor, preencha todo os campos!");
      }
    }

    Recipe.update(req.body, () => {
      return res.redirect(`/admin/receitas/${req.body.id}`);
    });
  },

  delete(req, res) {
    Recipe.delete(req.body.id, () => {
      return res.redirect("/admin/receitas");
    });
  }
}