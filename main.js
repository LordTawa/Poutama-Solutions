document.addEventListener("DOMContentLoaded", () => {
	const navObserver = new IntersectionObserver((entries) => {
 		entries.forEach(entry => {
			if (entry.isIntersecting) {
      			navLinks.forEach(link => link.classList.remove('nav-active'));
      			const activeLink = document.querySelector(`.site-nav__desktop a[href="#${entry.target.id}"]`);
      			if (activeLink) activeLink.classList.add('nav-active');
    			}
  		});
	}, {
  		threshold: 0.4
	});
	sections.forEach(section => navObserver.observe(section));
  		const fadeSections = document.querySelectorAll(
  			'.fade-section, .fade-left, .fade-right, .fade-up, .fade-down, .fade-in'
		);
	
  	const appearOptions = {
    	threshold: 0.1,
    	rootMargin: "0px 0px -50px 0px"
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

	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('.site-nav__desktop a');

	const navObserver = new IntersectionObserver((entries) => {
  		entries.forEach(entry => {
    		if (entry.isIntersecting) {
      			navLinks.forEach(link => link.classList.remove('nav-active'));
      			const activeLink = document.querySelector(`.site-nav__desktop a[href="#${entry.target.id}"]`);
      			if (activeLink) activeLink.classList.add('nav-active');
    		}
  		});
	}, {
  	threshold: 0.4
	});
	
	sections.forEach(section => navObserver.observe(section));

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
    	console.info("This code is broke,(hamburger:", !!hamburger, "nav:", !!nav, ")");
  	}
});
