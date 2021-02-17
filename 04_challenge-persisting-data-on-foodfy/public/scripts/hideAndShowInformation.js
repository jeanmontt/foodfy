const content = document.querySelector('#content');
const buttons = content.querySelectorAll('a');
const lists = content.querySelectorAll('.list');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (lists[i].classList.contains("hidden")) {
      lists[i].classList.remove("hidden");
      buttons[i].innerHTML = "ESCONDER";
    } else {
      lists[i].classList.add("hidden");
      buttons[i].innerHTML = "MOSTRAR";
    }
  });
}