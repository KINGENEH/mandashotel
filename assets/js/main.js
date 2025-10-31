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

  // ============ RIGHT-SLIDE MOBILE MENU ============
  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");

  if (menuToggle && sideMenu) {
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });

    // Close the side menu when a link is clicked
    document.querySelectorAll(".side-menu .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
      });
    });
  }

  console.log("main.js loaded successfully ✅");
});
