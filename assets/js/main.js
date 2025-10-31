// ============ HERO SLIDER ============
document.addEventListener("DOMContentLoaded", () => {

  // HERO SLIDER
  const slides = document.querySelectorAll("#hero-slide img");
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(changeSlide, 5000);
  }

  // ============ NAVBAR SCROLL EFFECT ============
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function () {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

 // ============ RIGHT-SLIDE MOBILE MENU + OVERLAY ============
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (menuToggle && sideMenu && overlay) {
  // Open / close menu
  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Close menu if overlay is clicked
  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close menu when a link inside it is clicked
  document.querySelectorAll(".side-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
}

