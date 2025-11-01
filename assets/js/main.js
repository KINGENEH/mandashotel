(function(){
  if (window.__MANDAS_INIT__) return;
  window.__MANDAS_INIT__ = true;

  window.addEventListener("scroll", function() {
    const navbar = document.getElementById("mainNav");
    const logo = document.getElementById("navLogo");
    if (!navbar || !logo) return;
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      logo.src = "assets/img/logo-dark.png";
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "assets/img/logo-light.png";
    }
  });

  document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu   = document.getElementById("sideMenu");
    const overlay    = document.getElementById("overlay");

    if (menuToggle && sideMenu && overlay) {
      menuToggle.addEventListener("click", () => {
        const active = sideMenu.classList.toggle("active");
        overlay.classList.toggle("active", active);
        menuToggle.classList.toggle("active", active);
        menuToggle.setAttribute("aria-expanded", active ? "true" : "false");
      });

      overlay.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded","false");
      });

      document.querySelectorAll(".side-menu .nav-link").forEach(link => {
        link.addEventListener("click", () => {
          sideMenu.classList.remove("active");
          overlay.classList.remove("active");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded","false");
        });
      });
    }
  });

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

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" }); }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function(){
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
  });

  const revealEls = document.querySelectorAll(".reveal");
  const onReveal = () => {
    const trigger = window.innerHeight * 0.92;
    revealEls.forEach(el => { const r = el.getBoundingClientRect(); if (r.top < trigger) el.classList.add("visible"); });
  };
  window.addEventListener("scroll", onReveal);
  window.addEventListener("load", onReveal);

  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => { if (toTop) toTop.style.display = window.scrollY > 400 ? "flex" : "none"; });
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) { preloader.style.opacity = "0"; setTimeout(() => { preloader.style.display = "none"; }, 600); }
  });
})();