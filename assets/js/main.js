// =======================================================
// MANDAS HOTEL MAIN.JS — Navbar, Hero, Side Menu
// =======================================================

// ============ Navbar Scroll Effect ============
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============ Right-slide Mobile Menu ============
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (menuToggle && sideMenu && overlay) {
  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");
  });

  document.querySelectorAll(".side-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// ============ Hero Slider ============
const slides = document.querySelectorAll(".hero-img");
let current = 0;


  let lastChange = 0;
function animateSlides(timestamp) {
  if (timestamp - lastChange > 6000) {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
    lastChange = timestamp;
  }
  requestAnimationFrame(animateSlides);
}
requestAnimationFrame(animateSlides);


// ============ Smooth Scroll for Navbar Links ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }
  });
});


