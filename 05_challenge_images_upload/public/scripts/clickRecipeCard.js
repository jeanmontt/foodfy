const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", () => {
    recipeId = card.getAttribute('id');

    window.location.href = `/receitas/${recipeId}`;
  });
}