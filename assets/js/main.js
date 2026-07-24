/**
 * course-hub - Main UI Interactivity Script
 * Manages accessibility transitions, navigation toggle states, and key events.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupDropdown();
  setupSmoothScrolling();
  setupInputSanitizer();
});

/**
 * Strict Security Sanitizer for Student Typing Fields
 * Automatically strips HTML tags (<, >) on input to prevent HTML/XSS injection.
 */
function setupInputSanitizer() {
  document.addEventListener('input', (e) => {
    if (e.target && (e.target.tagName === 'TEXTAREA' || (e.target.tagName === 'INPUT' && e.target.type === 'text'))) {
      const original = e.target.value;
      const sanitized = original.replace(/<[^>]*>/g, '').replace(/[<>]/g, '');
      if (sanitized !== original) {
        e.target.value = sanitized;
      }
    }
  });
}

/**
 * Mobile Navigation Hamburger Menu Toggle
 */
function setupMobileMenu() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menu-toggle-btn');
  const primaryNav = document.getElementById('primary-nav');

  if (!menuToggle || !header) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    header.setAttribute('data-expanded', !isExpanded);
  });

  // Close mobile menu if window resizing goes past mobile threshold
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && header.getAttribute('data-expanded') === 'true') {
      menuToggle.setAttribute('aria-expanded', 'false');
      header.setAttribute('data-expanded', 'false');
    }
  });
}

/**
 * Courses Dropdown / Mega-Menu Controls (Keyboard and Mouse accessible)
 */
function setupDropdown() {
  const dropdownContainer = document.querySelector('.dropdown-container');
  const dropdownTrigger = document.getElementById('courses-dropdown-trigger');
  const megaMenu = document.getElementById('courses-mega-menu');

  if (!dropdownContainer || !dropdownTrigger) return;

  // Toggle dropdown on click
  dropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownContainer.getAttribute('data-open') === 'true';
    setDropdownState(!isOpen);
  });

  // Close dropdown on clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      setDropdownState(false);
    }
  });

  // Keyboard accessibility controls
  dropdownContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setDropdownState(false);
      dropdownTrigger.focus();
    }
  });

  function setDropdownState(isOpen) {
    dropdownContainer.setAttribute('data-open', isOpen);
    dropdownTrigger.setAttribute('aria-expanded', isOpen);
  }
}

/**
 * Smooth Scrolling for anchor links (e.g. category jumps)
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip the WCAG skip-link
    if (anchor.classList.contains('skip-link')) return;

    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Scroll smoothly
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Set focus to target element for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
}
