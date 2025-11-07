// zara-therapy-script.js

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.accordion-header');
  
    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.parentElement;
  
        // Toggle the active class
        parent.classList.toggle('active');
  
        // Collapse other open items (optional behavior)
        faqHeaders.forEach(h => {
          if (h !== header) {
            h.parentElement.classList.remove('active');
          }
        });
      });
    });
  
    // Optionally: Smooth scroll behavior for navigation links (if any)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  













  