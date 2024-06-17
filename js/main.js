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


    document.getElementById('miFormulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío por defecto del formulario

      // Obtener los datos del formulario
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('message').value;

      // Crear un objeto FormData
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('email', email);
      formData.append('message', mensaje);

      // Enviar los datos al servidor usando Fetch API
      fetch('enviar_formulario.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          // Mostrar un cuadro de diálogo con el mensaje de éxito
          alert('Formulario enviado con éxito.');
          document.getElementById('miFormulario').reset(); // Opcional: resetear el formulario
      })
      .catch(error => {
          // Mostrar un cuadro de diálogo con el mensaje de error
          alert('Hubo un problema al enviar el formulario.');
      });
  });