// Menu mobile (burger) — Cours Tâmara
(function () {
  var bouton = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (!bouton || !menu) return;

  bouton.addEventListener('click', function () {
    var ouvert = menu.classList.toggle('ouvert');
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    bouton.textContent = ouvert ? '✕' : '☰';
  });

  // Ferme le menu quand on clique sur un lien
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('ouvert');
      bouton.setAttribute('aria-expanded', 'false');
      bouton.textContent = '☰';
    }
  });
})();
