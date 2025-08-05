// script.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
