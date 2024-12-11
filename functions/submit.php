<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capture form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validate and sanitize inputs (basic example)
    $name = htmlspecialchars(strip_tags($name));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags($phone));
    $message = htmlspecialchars(strip_tags($message));

    // Respond back with JSON
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'success',
        'message' => 'Form submitted successfully!',
        'data' => [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message
        ]
    ]);
    exit;
}
?>