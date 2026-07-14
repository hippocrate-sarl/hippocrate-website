/* ============================================
   HIPPOCRATE — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link highlight ----
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.hp-navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href')?.replace(/\/$/, '');
    if (href && path === href) {
      link.classList.add('active');
    }
  });

});
