document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  const appearOptions = {
    threshold: 0.2,
  };
	
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav__desktop");

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

  let lastScrollY = window.scrollY || 0;

  const heroHeight = hero ? hero.offsetHeight : 0;
  const heroBottom = Math.max(heroHeight * 0.8, 0);


  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY || 0;
		

        lastScrollY = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
  window.addEventListener("resize", () => {
    const desktopBreakpoint = 900; // 
    if (window.innerWidth > desktopBreakpoint) {
      nav && nav.classList.remove("active");
      hamburger && hamburger.classList.remove("active");
    }
  });
});
