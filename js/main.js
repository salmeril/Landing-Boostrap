document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var navbarPadre = document.querySelector('.navbar-padre');
    var toggler = document.querySelector('.navbar-toggler');
    navbarPadre.classList.toggle('expand');
    toggler.classList.toggle('collapsed');
  });