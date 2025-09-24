<?php
include 'config.php';

$result = $conn->query("SELECT * FROM appointments ORDER BY created_at DESC");

$appointments = [];
while ($row = $result->fetch_assoc()) {
    $appointments[] = $row;
}

if (count($appointments) > 0) {
    echo json_encode([
        "success" => true,
        "appointments" => $appointments
    ]);
} else {
    echo json_encode([
        "success" => true,
        "appointments" => [],
        "message" => "No appointments found"
    ]);
}

$conn->close();
?>
