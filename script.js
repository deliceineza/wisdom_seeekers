
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = Array.from(navLinks).map(link => {
    const href = link.getAttribute('href');
    return href.startsWith('#') ? document.querySelector(href) : null;
  });

  window.addEventListener('scroll', () => {
    // 1. Toggle fixed and orange navbar on scroll
    if (window.scrollY > 50) { // scroll threshold
      navbar.classList.add('fixed-scroll');
    } else {
      navbar.classList.remove('fixed-scroll');
    }

    // 2. Highlight active nav link based on scroll position
    let currentIndex = sections.findIndex(section => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= 60 && rect.bottom > 60;
    });

    navLinks.forEach((link, index) => {
      if (index === currentIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const discoverBtn = document.querySelector(".discover-btn");
  const carouselContainer = document.getElementById("carousel-section");

  // Scroll Left/Right
  prevBtn?.addEventListener("click", () => {
    track.scrollBy({ left: -600, behavior: "smooth" });
  });

  nextBtn?.addEventListener("click", () => {
    track.scrollBy({ left: 600, behavior: "smooth" });
  });

  // Reveal and scroll to carousel
  discoverBtn?.addEventListener("click", () => {
    carouselContainer.scrollIntoView({ behavior: "smooth" });
  });
});

  
