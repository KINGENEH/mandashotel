// ============ Hero Slider ============
let slides = document.querySelectorAll("#hero-slide img");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 5000); // every 5 seconds

// ============ Navbar Scroll Effect ============
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============ Booking Form (AJAX) ============
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".booking-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch("php/mailer.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Your booking request has been sent successfully! We'll get back to you shortly.");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Network error. Please check your connection.");
    }
  });
});

// Navbar transparent to white on scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
