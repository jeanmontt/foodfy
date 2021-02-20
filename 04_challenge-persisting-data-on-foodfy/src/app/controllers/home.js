const data = require("../../../data.json");

module.exports = {
  index(req, res) {
    return res.render("home/index", { data: data.recipes });
  },
  
  about(req, res) {
    return res.render("home/about");
  },
  
  recipes(req, res) {
    return res.render("home/recipes", { data: data.recipes });
  },
  
  recipe(req, res) {
    const recipeIndex = req.params.id;
    const recipe = data.recipes.find((recipe) => {
      return recipe.id == recipeIndex;
    });
  
    if (!recipe) {
      return res.send("Receita não encontrada!")
    }
  
    return res.render("home/recipe", { data: recipe });
  },

  search(req, res) {
    return res.render("home/search", { data: data.recipes });
  },

  chefs(req, res) {
    return res.render("home/chefs");
  }
};