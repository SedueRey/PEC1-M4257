import 'regenerator-runtime/runtime'

const debounce = (func, wait = 100) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const supportsWebp = async () => {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

// No es necesario esperar a que cargue todo el DOM
// para comprobar la compatibilidad.
(async () => {
  if(!await supportsWebp()) {
    document.body.classList.add('nowebp');
  }
})();

window.addEventListener('load', () => {
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
  const loadingLazy = document.querySelectorAll('.loadingLazy');
  loadingLazy.forEach(
    function(currentValue, currentIndex) {
      loadingLazy[currentIndex].setAttribute('src', loadingLazy[currentIndex].getAttribute('data-src') ) ;
    }
  )
});