function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.body.classList.toggle('js_menuopened');
  });
  document.getElementById('menubg').addEventListener('click', (e) => {
    if(e.target.id === 'menubg') {
      document.body.classList.remove('js_menuopened');
    }
  });
  window.addEventListener('scroll', 
    debounce(() => {
      console.log('accede');
      const headerHeight = document.querySelector('.mainheader').offsetHeight;
      if(window.scrollY > headerHeight) {
        if (!document.body.classList.contains('js_fixedheader')) {
          document.body.classList.add('js_fixedheader');
        }
      } else {
        document.body.classList.remove('js_fixedheader');
      }
    })
  );
});