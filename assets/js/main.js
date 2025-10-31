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


// Navbar opacity scroll effect
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// Mobile menu slide from right
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

// Mini booking section populate main booking
const miniForm = document.getElementById("miniBookingForm");
miniForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const checkin = document.getElementById("miniCheckin").value;
  const checkout = document.getElementById("miniCheckout").value;
  document.querySelector('input[name="checkin"]').value = checkin;
  document.querySelector('input[name="checkout"]').value = checkout;
  document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
});

// === Change navbar background and link colors on scroll ===
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// === Right-slide mobile menu toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");

  if (menuToggle && sideMenu) {
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll(".side-menu .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
      });
    });
  }
});



