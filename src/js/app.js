document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.body.classList.toggle('js_menuopened');
  });
  document.getElementById('menubg').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.id === 'menubg') {
      document.body.classList.remove('js_menuopened');
    }
  });
});