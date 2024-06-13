document.querySelector('.navbar-toggler').addEventListener('click', function() {
  var navbarPadre = document.querySelector('.navbar-padre');
  var toggler = document.querySelector('.navbar-toggler');
  navbarPadre.classList.toggle('expand');
  toggler.classList.toggle('collapsed');
});

document.querySelectorAll('.navbar-padre a').forEach(function(navLink) {
  navLink.addEventListener('click', function() {
      var navbarPadre = document.querySelector('.navbar-padre');
      var toggler = document.querySelector('.navbar-toggler');
      // Verificar si la barra de navegación está expandida
      if (navbarPadre.classList.contains('expand')) {
          navbarPadre.classList.remove('expand');
          toggler.classList.add('collapsed');
      }
  });
});
  
    document.addEventListener('DOMContentLoaded', function() {
      const body = document.querySelector('body');
      
      function handleScroll() {
        const rect = body.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          body.classList.add('scroll-animated');
        }
      }

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Ejecuta la función una vez al cargar para animar el body si está visible
    });