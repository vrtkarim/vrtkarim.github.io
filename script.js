(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav style on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav__links');

  const closeMenu = () => {
    if (!toggle || !links) return;
    links.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };

  const openMenu = () => {
    if (!toggle || !links) return;
    links.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  };

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is tapped
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', closeMenu)
    );

    // Close when tapping outside the menu
    document.addEventListener('click', (e) => {
      if (
        links.classList.contains('is-open') &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close if resizing back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Project card spotlight effect (mouse-follow gradient) — desktop only
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  if (supportsHover) {
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
      });
    });
  }
})();
