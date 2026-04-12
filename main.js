document.addEventListener("DOMContentLoaded", () => {

  // Fade animations
  const fadeSections = document.querySelectorAll(
    '.fade-section, .fade-left, .fade-right, .fade-up, .fade-down, .fade-in'
  );
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  fadeSections.forEach(section => appearOnScroll.observe(section));
  

  // Hamburger menu
  const header = document.querySelector(".header");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav__desktop");

  if (!header) {
    console.warn("Header element not found — sticky script disabled.");
    return;
  }

  if (hamburger && nav) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }
  
  // Nav highlighter
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav__desktop a');

  let lastActive = null;

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const activeLink = document.querySelector(`.site-nav__desktop a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        if (lastActive) lastActive.classList.remove('nav-active');
        if (activeLink) {
          activeLink.classList.add('nav-active');
          lastActive = activeLink; // 👈 update the last known active
        }
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => navObserver.observe(section));
});
