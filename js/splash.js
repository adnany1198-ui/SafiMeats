/* ========================================
   SPLASH SCREEN — Safi Meats
   Auto-dismiss after 4 s, or on click/tap.
   ======================================== */
(function () {
  var splash = document.getElementById('splash');
  var content = document.getElementById('page-content');
  if (!splash || !content) return;

  var dismissed = false;

  // Lock body scroll while splash is visible
  document.body.style.overflow = 'hidden';

  function dismiss() {
    if (dismissed) return;
    dismissed = true;

    // Fade out splash
    splash.classList.add('dismissed');

    // Restore body scroll
    document.body.style.overflow = 'auto';

    // After a brief delay, fade in page content
    setTimeout(function () {
      content.classList.add('visible');
    }, 300);
  }

  // Click / tap anywhere on splash to dismiss
  splash.addEventListener('click', dismiss);

  // Auto-dismiss after 4 seconds
  setTimeout(dismiss, 4000);
})();
