

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

document.querySelectorAll('.carousel-card').forEach(card => {
  const img = card.querySelector('.project-image');
  const details = card.querySelector('.project-details');
  const closeBtn = card.querySelector('.close-details-btn');

  img.addEventListener('click', () => {
    seeMoreBtn.style.display = 'block';
  });

  seeMoreBtn.addEventListener('click', e => {
    e.stopPropagation();
    seeMoreBtn.style.display = 'none';
    details.style.display = 'block';
  });

  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    details.style.display = 'none';
    seeMoreBtn.style.display = 'block';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.carousel-card');
      card.classList.toggle('active');
      button.textContent = card.classList.contains('active') ? 'See Less' : 'See More';
    });
  });
});





  
