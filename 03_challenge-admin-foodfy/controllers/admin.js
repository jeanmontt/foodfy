const data = require("../src/database/data");

exports.index = (req, res) => {
  return res.render("admin/index", { data });
};

exports.create = (req, res) => {
  res.render("admin/create");
};

exports.show = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = data.find((recipe) => {
    return recipe.id == recipeIndex;
  });

  if (!recipe) {
    return res.send("Receita não encontrada!");
  }

  return res.render("admin/show", { data: recipe });
};

exports.edit = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = data.find((recipe) => {
    return recipe.id == recipeIndex;
  });

  if (!recipe) {
    return res.send("Receita não encontrada!");
  }

  return res.render("admin/edit", { data: recipe });
};

// exports.post = (req, res) => {

// };

// exports.put = (req, res) => {

// };

// exports.delete = (req, res) => {

// };