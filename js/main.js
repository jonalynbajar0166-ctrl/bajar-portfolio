// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.classList.remove('active'); // Close mobile menu after click
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  // Add click listeners to all project images
  document.querySelectorAll('#projects .project-card img').forEach(img => {
    img.addEventListener('click', function() {
      modalImg.src = this.src;
      modal.style.display = 'flex';
    });
  });

  // Close modal when clicking on it
  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});