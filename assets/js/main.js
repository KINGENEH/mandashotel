/* ==========================================================
   Mandas Hotel – Unified Frontend Script (Stable Build)
   v4.0 - Clean, guarded, and mobile-optimized
   ========================================================== */

(function () {
  // === Prevent Double Execution ===
  if (window.__MANDAS_INIT__) return;
  window.__MANDAS_INIT__ = true;

  /* ===============================
     1. PRELOADER
  =============================== */
  window.addEventListener("load", () => {
    const pre = document.getElementById("preloader");
    if (pre) {
      pre.classList.add("hidden");
      pre.style.transition = "opacity 0.6s ease";
      pre.style.opacity = "0";
      setTimeout(() => (pre.style.display = "none"), 600);
    }
  });

  /* ===============================
     2. NAVBAR SCROLL STATE + LOGO SWITCH
  =============================== */
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("mainNav");
    const logo = document.getElementById("navLogo");
    if (!nav) return;
    const scrolled = window.scrollY > 50;

    nav.classList.toggle("scrolled", scrolled);

    // Logo switching
    if (logo) {
      logo.src = scrolled
        ? "assets/img/logo-dark.png"
        : "assets/img/logo-light.png";
    }
  });

  /* ===============================
     3. RIGHT-SLIDE MENU + OVERLAY
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

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
        menuToggle.setAttribute("aria-expanded", "false");
      });

      // Close on menu link click
      document.querySelectorAll(".side-menu .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          sideMenu.classList.remove("active");
          overlay.classList.remove("active");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  });

  /* ===============================
     4. HERO SLIDER (Auto Fade)
  =============================== */
  (function () {
    const slides = document.querySelectorAll(".hero-img");
    if (!slides || slides.length < 2) return;
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5500);
  })();

  /* ===============================
     5. SMOOTH SCROLL FOR INTERNAL LINKS
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          });
        }
      });
    });
  });

  /* ===============================
     6. MINI BOOKING → MAIN BOOKING SYNC
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
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
        if (booking)
          window.scrollTo({
            top: booking.offsetTop - 70,
            behavior: "smooth",
          });
      });
    }
  });

  /* ===============================
     7. REVEAL ON SCROLL
  =============================== */
  const revealEls = document.querySelectorAll(".reveal");
  const onReveal = () => {
    const trigger = window.innerHeight * 0.92;
    revealEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < trigger) el.classList.add("visible");
    });
  };
  window.addEventListener("scroll", onReveal);
  window.addEventListener("load", onReveal);

  /* ===============================
     8. SCROLL TO TOP BUTTON
  =============================== */
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    if (toTop)
      toTop.style.display = window.scrollY > 400 ? "flex" : "none";
  });
  if (toTop)
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
})();
