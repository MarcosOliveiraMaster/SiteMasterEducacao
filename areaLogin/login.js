document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('loginForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Em desenvolvimento: substitua por autenticação real quando disponível
    alert('Login em desenvolvimento.');
  });

  var cadastroToggle = document.getElementById('cadastroToggle');
  var inlineCadastro = document.getElementById('inlineCadastro');

  function showInlineCadastro() {
    if (!inlineCadastro) return;
    inlineCadastro.style.display = 'block';
    requestAnimationFrame(function() { inlineCadastro.classList.add('visible'); inlineCadastro.classList.remove('hidden'); });
    if (cadastroToggle) cadastroToggle.setAttribute('aria-expanded','true');
    // scroll the inline block into view after it's becoming visible
    setTimeout(function() {
      try { inlineCadastro.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    }, 200);
  }

  function hideInlineCadastro() {
    if (!inlineCadastro) return;
    inlineCadastro.classList.remove('visible');
    inlineCadastro.classList.add('hidden');
    setTimeout(function() { inlineCadastro.style.display = 'none'; }, 320);
    if (cadastroToggle) cadastroToggle.setAttribute('aria-expanded','false');
  }

  if (cadastroToggle) {
    cadastroToggle.addEventListener('click', function(e) {
      e.preventDefault();
      if (!inlineCadastro) return;
        if (inlineCadastro.style.display === 'block' || inlineCadastro.classList.contains('visible')) {
        hideInlineCadastro();
      } else {
        showInlineCadastro();
      }
    });
  }

});
