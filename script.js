const toggleButton = document.querySelector('.navbar-toggle');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
