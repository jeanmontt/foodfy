exports.index = (req, res) => {

  return res.render("admin/chefs/index");
};

exports.create = (req, res) => {
  res.render("admin/chefs/create");
};

// exports.post = (req, res) => {

// return res.redirect("/admin/recipes/receitas");
// };

exports.show = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = 1;

  if (recipeIndex == recipe) {
    return res.render("admin/chefs/show");
  }
};

exports.edit = (req, res) => {
  const recipeIndex = req.params.id;
  const recipe = 1;

  if (recipeIndex == recipe) {
    return res.render("admin/chefs/edit");
  }
};

// exports.put = (req, res) => {

// };

// exports.delete = (req, res) => {

//   return res.redirect("/admin/recipes/receitas");

// };