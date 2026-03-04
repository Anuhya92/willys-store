function initNavbar() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) {
    console.warn("Navbar: #navToggle or #navLinks not found in DOM");
    return;
  }

  // Click hamburger button
  toggle.addEventListener("click", function (e) {
    e.stopPropagation();

    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  const navLinks = links.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (e) {
    const navbar = document.querySelector(".navbar");
    if (navbar && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  function closeMenu() {
    links.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
}

// Initialize navbar functionality after DOM is loaded
document.addEventListener("DOMContentLoaded", initNavbar);
