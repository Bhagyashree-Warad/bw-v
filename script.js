// Trigger animation when scrolling
const animatedElements = document.querySelectorAll('.animate-up');

function revealOnScroll() {
    animatedElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
