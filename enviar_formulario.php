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

    // Correo de destino
    $para = 'formulario@magnoliaharvestco.ar'; // Reemplaza con tu dirección de correo de Hostinger
    $asunto = 'Nuevo mensaje del formulario de contacto';

    // Contenido del correo en formato HTML
    $contenido = "
    <html>
    <head>
        <title>Nuevo mensaje del formulario de contacto</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 16px;
            }
            .mensaje {
                background-color: #f5f5f5;
                padding: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <div class='mensaje'>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mensaje:</strong> $mensaje</p>
        </div>
    </body>
    </html>
    ";

    // Cabeceras adicionales para el correo
    $cabeceras = "MIME-Version: 1.0" . "\r\n";
    $cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $cabeceras .= "From: $email\r\n";

    // Enviar correo
    if (mail($para, $asunto, $contenido, $cabeceras)) {
        echo 'Formulario enviado con éxito.';
    } else {
        echo 'Hubo un problema al enviar el formulario.';
    }
} else {
    echo 'Método no permitido';
}
?>
