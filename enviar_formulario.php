<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitizar y validar datos
    $nombre = filter_var(trim($_POST['nombre']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensaje = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Correo electrónico no válido';
        exit;
    }

    $para = 'formulario@magnoliaharvestco.ar'; // Reemplaza con tu dirección de correo de Hostinger
    $asunto = 'Nuevo mensaje del formulario de contacto';
    $contenido = "Nombre: $nombre\nCorreo Electrónico: $email\nMensaje: $mensaje";
    $cabeceras = "From: $email\r\nReply-To: $email";

    if (mail($para, $asunto, $contenido, $cabeceras)) {
        echo 'Formulario enviado con éxito.';
    } else {
        echo 'Hubo un problema al enviar el formulario.';
    }
} else {
    echo 'Método no permitido';
}
?>
