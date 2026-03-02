document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeSections.forEach(section => {
    appearOnScroll.observe(section);
  });
});
	
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
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

  } else {
    console.info("LOL! THIS CODE IS BROKEN(hamburger:", !!hamburger, "nav:", !!nav, ")");
  }
