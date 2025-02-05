const toggleButton = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');
const navIcons = document.querySelector('.navbar-icons');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navIcons.classList.toggle('show');
});
