const formDelete = document.querySelector(".form-delete");
const totalRecipes = formDelete.querySelector("#total_recipes").value;

formDelete.addEventListener("submit", function (event) {
  if (totalRecipes == 0) {
    const confirmation = confirm("Deseja deletar?");

    if (!confirmation) {
      event.preventDefault();
    }
  } else {
    alert("Não é possível deletar, chef possui receita registrada!");
    event.preventDefault();
  }
})