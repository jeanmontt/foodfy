const Chef = require("../models/Chef");

module.exports = {
  index(req, res) {
    Chef.all((chefs) => {
      return res.render("admin/chefs/index", {
        chefs
      });
    });
  },

  create(req, res) {
    return res.render("admin/chefs/create");
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor, preencha todo os campos!");
      }
    }

    Chef.create(req.body, (chef) => {
      return res.redirect(`/admin/chefs/${chef.id}`);
    });
  },

  show(req, res) {
    Chef.find(req.params.id, (chef) => {
      if (!chef) return res.send("Chef not found!");

      Chef.findRecipesChef(req.params.id, (recipes) => {
        return res.render("admin/chefs/show", {
          chef,
          recipes_chef: recipes
        });
      });
    });
  },

  edit(req, res) {
    Chef.find(req.params.id, (chef) => {
      if (!chef) return res.send("Receita não encontrada!");

      return res.render("admin/chefs/edit", {
        chef
      });

    });
  },

  put(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor Preencha todo os campos");
      }
    }

    Chef.update(req.body, () => {
      return res.redirect(`/admin/chefs/${req.body.id}`);
    });
  },

  delete(req, res) {
    Chef.delete(req.body.id, () => {
      return res.redirect("/admin/chefs");
    })
  },
}