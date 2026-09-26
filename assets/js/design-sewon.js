(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('span').textContent = '＋';
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.querySelector('span').textContent = open ? '−' : '＋';
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menu.focus();
    }
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const isInternal = new URL(link.href, window.location.href).origin === window.location.origin;
    link.target = isInternal ? '_self' : '_blank';
    if (!isInternal) link.rel = 'noopener noreferrer';
  });
  const sections = links.map(link => ({link, section: document.querySelector(link.getAttribute('href'))})).filter(item => item.section);
  let scheduled = false;
  const updateCurrent = () => {
    let active = sections[0];
    sections.forEach(item => {
      if (item.section.getBoundingClientRect().top <= 145) active = item;
    });
    links.forEach(link => link.removeAttribute('aria-current'));
    if (active) active.link.setAttribute('aria-current', 'location');
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateCurrent); }
  }, {passive: true});
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
    updateCurrent();
  });
  updateCurrent();
})();
