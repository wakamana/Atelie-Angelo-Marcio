const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .sofa1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .sofa2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

