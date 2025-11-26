document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu Toggle
    const toggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    toggle.addEventListener("click", () => {
        mobileMenu.style.display =
            mobileMenu.style.display === "flex" ? "none" : "flex";
    });

    // Slider Logic
    let index = 0;
    const slider = document.getElementById("slider");

    function showSlide() {
        const slides = document.querySelectorAll(".slide");
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    window.nextSlide = function () {
        const slides = document.querySelectorAll(".slide");
        index = (index + 1) % slides.length;
        showSlide();
    };

    window.prevSlide = function () {
        const slides = document.querySelectorAll(".slide");
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    };

    setInterval(() => {
        nextSlide();
    }, 3000);
});
