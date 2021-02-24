const Home = require("../models/Home");

module.exports = {
  index(req, res) {
    const {
      filter
    } = req.query;

    if (filter) {
      Home.findBy(filter, (recipes) => {
        return res.render("home/search", {
          recipes,
          filter
        });
      });
    } else {
      Home.all((recipes) => {
        return res.render("home/index", {
          recipes
        });
      });
    }
  },

  about(req, res) {
    return res.render("home/about");
  },

  recipes(req, res) {
    Home.all((recipes) => {
      return res.render("home/recipes", {
        recipes
      });
    });
  },

  chefs(req, res) {
    Home.allChefs((chefs) => {
      return res.render("home/chefs", {
        chefs
      });
    })
  },

  search(req, res) {
    const {
      filter
    } = req.query;

    Home.findBy(filter, (recipes) => {
      return res.render("home/search", {
        recipes,
        filter
      });
    });
  },

  recipe(req, res) {
    const {
      id
    } = req.params;

    Home.find(id, (recipe) => {
      return res.render("home/recipe", {
        recipe
      });
    })
  }
}