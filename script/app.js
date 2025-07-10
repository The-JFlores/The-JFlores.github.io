
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('show'); // añade o quita la clase "show"

  menuBtn.textContent = isOpen ? '✖' : '☰';
});
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("#about p");

  paragraphs.forEach((p) => {
    const text = p.textContent;
    p.textContent = "";
    let index = 0;

    function type() {
      if (index < text.length) {
        p.textContent += text.charAt(index);
        index++;
        setTimeout(type, 25);
      }
    }
    type();
  });
});