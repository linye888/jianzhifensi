(function () {
  'use strict';

  var config = window.WHATSAPP_CONFIG || {};
  var phone = config.phone || '56912345678';
  var message = encodeURIComponent(
    config.message || 'Hola, quiero empezar a ganar dinero haciendo tareas.'
  );
  var whatsappUrl = 'https://wa.me/' + phone + '?text=' + message;

  document.querySelectorAll('.whatsapp-link').forEach(function (el) {
    el.setAttribute('href', whatsappUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');

    el.addEventListener('click', function () {
      var track = el.getAttribute('data-track');
      if (track && typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', { event_label: track });
      }
    });
  });
})();
