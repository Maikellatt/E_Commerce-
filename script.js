const toggleButton = document.querySelector('.navbar-toggle');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "./media/rooms-main2.png",
        "./media/Image-living room.png",
        "./media/bedroom.png",
        "./media/dining.png"
    ]; // Lisa siia kõik pildid

    let currentIndex = 0;
    const imageElement = document.querySelector(".rooms-secondary-img img");
    const nextButton = document.querySelector(".rooms-next-btn");
    const dots = document.querySelectorAll(".rooms-dot");

    function updateSlider(index) {
        imageElement.src = images[index];
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            currentIndex = i;
            updateSlider(currentIndex);
        });
    });
});
