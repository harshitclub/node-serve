// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// FAQ Accordion
const faqHeaders = document.querySelectorAll(".faq-header");
faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const faqCard = header.parentElement;
    faqCard.classList.toggle("active");
  });
});

// Smooth scroll behavior for links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "var(--shadow-medium)";
  } else {
    navbar.style.boxShadow = "var(--shadow-light)";
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards for animation
document
  .querySelectorAll(".feature-card, .app-card, .stat-card, .about-card")
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

// Parallax effect on hero section
window.addEventListener("scroll", () => {
  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual) {
    const scrolled = window.pageYOffset;
    heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Responsive hamburger animation
if (hamburger) {
  function updateHamburgerState() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }

  window.addEventListener("resize", updateHamburgerState);
}

console.log("Nexus AI - The Future of Intelligence");
