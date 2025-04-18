document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
