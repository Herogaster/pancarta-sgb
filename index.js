export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};

  function deleteSuggestion(i) {
    suggestions[i] = null;
    // Compactar: mover las no-nulas al frente
    const filled = suggestions.filter(Boolean);
    suggestions = [...filled, ...Array(MAX - filled.length).fill(null)];
    renderGrid();
    showToast('🗑️ Sugerencia eliminada.');
    if (!suggestions.some(Boolean)) {
      deleteMode = false;
      document.getElementById('btnDel').classList.remove('active-mode');
    }
  }

  // ─── Toast ────────────────────────────────────────────
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  // ─── Utils ────────────────────────────────────────────
  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
  }