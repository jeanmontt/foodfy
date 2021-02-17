const data = require("../../../data.json");

exports.index = (req, res) => {
  res.render("home/index", { data: data.recipes });
}

exports.about = (req, res) => {
  res.render("home/about");
}

exports.recipes =(req, res) => {
  res.render("home/recipes", { data: data.recipes });
}

exports.recipe = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = data.recipes.find((recipe) => {
    return recipe.id == recipeIndex;
  });

  if (!recipe) {
    return res.send("Receita não encontrada!")
  }

  res.render("home/recipe", { data: recipe });
}