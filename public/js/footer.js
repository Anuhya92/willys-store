// footer.js — Willys Hamburger Nav Toggle

(function () {

  function initNav() {
    var toggle = document.getElementById('navToggle');
    var links  = document.getElementById('navLinks');

    if (!toggle || !links) {
      console.warn('Navbar: #navToggle or #navLinks not found in DOM');
      return;
    }

    // Click hamburger button
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();

      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    
    var navLinks = links.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    })

    document.addEventListener('click', function (e) {
      var navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(e.target)) {
        closeMenu();
      }
    });


    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    function closeMenu() {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

})();