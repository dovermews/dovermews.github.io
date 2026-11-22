// Tapping a photo (or "View full size") opens it large, like Karen's Lovable site.
(function () {
  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.innerHTML = '<h2 class="lightbox-title"></h2><div class="lightbox-body"><img alt=""></div>' +
    '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>';
  document.body.appendChild(dialog);

  var title = dialog.querySelector('.lightbox-title');
  var img = dialog.querySelector('img');
  dialog.querySelector('.lightbox-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });

  document.querySelectorAll('figure button').forEach(function (button) {
    var figure = button.closest('figure');
    var photo = figure.querySelector('img');
    if (!photo) return;
    var caption = figure.querySelector('figcaption');
    button.addEventListener('click', function () {
      title.textContent = caption ? caption.textContent : photo.alt;
      img.src = photo.src;
      img.alt = photo.alt + ' full size';
      dialog.showModal();
    });
  });
})();
