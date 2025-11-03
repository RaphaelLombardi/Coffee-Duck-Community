document.getElementById('theme').onclick = function() {
  document.body.classList.toggle('modo-escuro');
  this.textContent = document.body.classList.contains('modo-escuro') ? '☀️ Modo claro' : '🌙 Modo escuro';
};