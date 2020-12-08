const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", () => {
        modalOverlay.classList.add('active');
    })
}

modalOverlay.querySelector('a').addEventListener("click", () => {
    modalOverlay.classList.remove('active');
})