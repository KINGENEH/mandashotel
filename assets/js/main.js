
// NAVBAR SCROLL + LOGO SWITCH
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("mainNav");
  const logo = document.getElementById("navLogo");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.src = "assets/img/logo-dark.png";
  } else {
    navbar.classList.remove("scrolled");
    logo.src = "assets/img/logo-light.png";
  }
});

// MOBILE MENU TOGGLE + OVERLAY
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


// Hero slider
(function(){
  const slides = document.querySelectorAll(".hero-img");
  if (!slides || slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5500);
})();
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" }); }
  });
});
// Mini booking → populate main booking & scroll
(function(){
  const miniIn = document.getElementById("mini-checkin");
  const miniOut = document.getElementById("mini-checkout");
  const btn = document.getElementById("mini-book-btn");
  const mainIn = document.getElementById("checkin");
  const mainOut = document.getElementById("checkout");
  if (btn && miniIn && miniOut && mainIn && mainOut) {
    btn.addEventListener("click", () => {
      if (miniIn.value) mainIn.value = miniIn.value;
      if (miniOut.value) mainOut.value = miniOut.value;
      const booking = document.getElementById("booking");
      if (booking) window.scrollTo({ top: booking.offsetTop - 70, behavior:"smooth" });
    });
  }
})();
// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const onReveal = () => {
  const trigger = window.innerHeight * 0.92;
  revealEls.forEach(el => { const r = el.getBoundingClientRect(); if (r.top < trigger) el.classList.add("visible"); });
};
window.addEventListener("scroll", onReveal);
window.addEventListener("load", onReveal);
// Scroll-to-top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => { if (toTop) toTop.style.display = window.scrollY > 400 ? "flex" : "none"; });
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

// ====== PRELOADER HIDE ======
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // fade out in 0.5s
  }
});

