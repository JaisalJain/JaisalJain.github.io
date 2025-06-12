// Reveal sections on scroll
const slideUpEls = document.querySelectorAll(".slide-up");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  slideUpEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
