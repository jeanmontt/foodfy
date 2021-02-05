const data = require("../src/database/data");

exports.index = (req, res) => {
  res.render("home/index", { data });
}

exports.about = (req, res) => {
  res.render("home/about");
}

exports.recipes =(req, res) => {
  res.render("home/recipes", { data });
}

exports.recipe = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = data.find((recipe) => {
    return recipe.id == recipeIndex;
  });

  if (!recipe) {
    return res.send("Receita não encontrada!")
  }

  res.render("home/recipe", { data: recipe });
}