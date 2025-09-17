<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect all form data
    $formData = [
        'Paciente' => $_POST['nombrePaciente'] ?? '',
        'RUT Paciente' => $_POST['rutPaciente'] ?? '',
        'Medicamento' => $_POST['nombreMedicamento'] ?? '',
        'Prescripción diaria' => $_POST['prescripcionDiaria'] ?? '',
        'Duración tratamiento' => $_POST['duracionTratamiento'] ?? '',
        'Cantidad total' => $_POST['cantidadTotal'] ?? '',
        'Diagnóstico' => $_POST['diagnostico'] ?? '',
        'Fecha receta' => $_POST['fechaReceta'] ?? '',
        'Médico' => $_POST['nombreMedico'] ?? '',
        'RUT Médico' => $_POST['rutMedico'] ?? '',
        'Email' => $_POST['email'] ?? '',
        'Teléfono' => $_POST['telefono'] ?? ''
    ];

    // Email configuration
    $to = "your-email@example.com"; // Replace with your email
    $subject = "Nueva solicitud de importación de medicamentos";
    
    // Create email body
    $message = "Nueva solicitud de importación de medicamentos:\n\n";
    foreach ($formData as $key => $value) {
        $message .= "$key: $value\n";
    }
    
    // Handle file attachments
    $attachments = [];
    
    // Process receta file
    if (isset($_FILES['firmaMedico']) && $_FILES['firmaMedico']['error'] == UPLOAD_ERR_OK) {
        $attachments[] = $_FILES['firmaMedico'];
    }
    
    // Process poder simple file
    if (isset($_FILES['poderSimple']) && $_FILES['poderSimple']['error'] == UPLOAD_ERR_OK) {
        $attachments[] = $_FILES['poderSimple'];
    }
    
    // Email headers
    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    
    // Boundary for multipart message
    $boundary = md5(time());
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    // Message body
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $message . "\r\n";
    
    // Attach files
    foreach ($attachments as $file) {
        if (is_uploaded_file($file['tmp_name'])) {
            $content = file_get_contents($file['tmp_name']);
            $encoded = chunk_split(base64_encode($content));
            
            $body .= "--$boundary\r\n";
            $body .= "Content-Type: application/octet-stream; name=\"" . $file['name'] . "\"\r\n";
            $body .= "Content-Disposition: attachment; filename=\"" . $file['name'] . "\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= $encoded . "\r\n";
        }
    }
    
    $body .= "--$boundary--";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Success response
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
    } else {
        // Error response
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    // Not a POST request
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>