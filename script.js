// Hide loader after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";
  setTimeout(() => loader.style.display = "none", 500);
});

// Theme toggle with persistence
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("data-theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("data-theme", newTheme);
});

// Scroll-triggered animations
const fadeIns = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
fadeIns.forEach(el => observer.observe(el));

// Back to top logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  if (!contactForm.checkValidity()) {
    e.preventDefault();
    alert("Please complete all required fields.");
  } else {
    alert("Message sent! Thank you.");
  }
});

// Responsive navbar toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
