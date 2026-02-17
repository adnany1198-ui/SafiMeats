/* ========================================
   NAVIGATION — Mobile nav, active states
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ---- Active nav link based on scroll position ----
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && links.length) {
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY + 100;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          links.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { passive: true });
  }
});
