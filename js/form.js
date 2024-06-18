// script.js

// Función para enviar el formulario
function enviarFormulario() {
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
        // Mostrar el mensaje de confirmación
        const mensajeConfirmacion = document.getElementById('mensaje');
        mensajeConfirmacion.innerHTML = data;
        mensajeConfirmacion.style.display = 'block';

        // Opcional: resetear el formulario
        document.getElementById('miFormulario').reset();
    })
    .catch(error => {
        // Mostrar un mensaje de error
        alert('Hubo un error al enviar el formulario.');
    });
}

// Asignar la función enviarFormulario() al evento click del botón
document.getElementById('enviarBtn').addEventListener('click', enviarFormulario);
