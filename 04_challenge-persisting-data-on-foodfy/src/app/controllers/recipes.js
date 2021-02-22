const fs = require("fs");
const data = require("../../../data.json");

module.exports = {
  index(req, res) {
    const recipes = data.recipes;

    return res.render("admin/recipes/index", {
      recipes
    });
  },

  create(req, res) {
    res.render("admin/recipes/create");
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor, preencha todos os campos!");
      }
    };

    let id = 1;
    const lastRecipe = data.recipes[data.recipes.length - 1];

    if (lastRecipe) {
      id = lastRecipe.id + 1;
    }

    data.recipes.push({
      id,
      ...req.body
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Write file erro!");

      return res.redirect("/admin/recipes/receitas");
    });
  },

  show(req, res) {
    const recipeIndex = req.params.id;
    const recipe = data.recipes.find((recipe) => {
      return recipe.id == recipeIndex;
    });

    if (!recipe) {
      return res.send("Receita não encontrada!");
    }

    return res.render("admin/recipes/show", {
      data: recipe
    });
  },

  edit(req, res) {
    const recipeIndex = req.params.id;
    const recipe = data.recipes.find((recipe) => {
      return recipe.id == recipeIndex;
    });

    if (!recipe) {
      return res.send("Receita não encontrada!");
    }

    return res.render("admin/recipes/edit", {
      data: recipe
    });
  },

  put(req, res) {
    const {
      id
    } = req.body;
    let index = 0;

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
      if (id == recipe.id) {
        index = foundIndex;
        return true
      }
    });

    if (!foundRecipe) return res.send("Receita não encontrada!");

    const recipe = {
      ...foundRecipe,
      ...req.body,
      id: Number(req.body.id),
    };

    data.recipes[index] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Write file error!");

      return res.redirect(`/admin/recipes/receitas/${id}`);
    });
  },

  delete(req, res) {
    const {
      id
    } = req.body;

    const filteredRecipes = data.recipes.filter(function (recipe) {
      return recipe.id != id;
    });

    data.recipes = filteredRecipes;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Write file error!");

      return res.redirect("/admin/recipes/receitas");
    });
  }
}