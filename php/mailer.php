<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name'] ?? 'Guest');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $checkin = htmlspecialchars($_POST['checkin'] ?? '');
    $checkout = htmlspecialchars($_POST['checkout'] ?? '');
    $guests = htmlspecialchars($_POST['guests'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Recipient
    $toEmail = "reservations@mandashotel.com";

    // Create instance
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.mandashotel.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'reservations@mandashotel.com';
        $mail->Password = 'M.hotel_2025'; // replace later
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Sender info
        $mail->setFrom('reservations@mandashotel.com', 'Mandas Hotel');
        $mail->addAddress($toEmail);
        if (!empty($email)) {
            $mail->addReplyTo($email, $name);
        }

        // Email subject
        $mail->Subject = "New Booking Request from {$name} — Mandas Hotel Website";

        // Email body (HTML table)
        $body = "
        <h2>New Booking Request</h2>
        <table border='1' cellspacing='0' cellpadding='8' style='border-collapse:collapse;width:100%;max-width:600px;'>
            <tr><th align='left'>Name</th><td>{$name}</td></tr>
            <tr><th align='left'>Email</th><td>{$email}</td></tr>
            <tr><th align='left'>Phone</th><td>{$phone}</td></tr>
            <tr><th align='left'>Check-In</th><td>{$checkin}</td></tr>
            <tr><th align='left'>Check-Out</th><td>{$checkout}</td></tr>
            <tr><th align='left'>Guests</th><td>{$guests}</td></tr>
            <tr><th align='left'>Message</th><td>{$message}</td></tr>
        </table>
        <p><strong>Mandas Hotel Booking System</strong></p>";

        $mail->isHTML(true);
        $mail->Body = $body;

        // Send mail
        $mail->send();

        // Auto-reply to guest
        if (!empty($email)) {
            $reply = new PHPMailer(true);
            $reply->isSMTP();
            $reply->Host = 'mail.mandashotel.com';
            $reply->SMTPAuth = true;
            $reply->Username = 'reservations@mandashotel.com';
            $reply->Password = 'M.hotel_2025'; // replace later
            $reply->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $reply->Port = 465;

            $reply->setFrom('reservations@mandashotel.com', 'Mandas Hotel');
            $reply->addAddress($email, $name);
            $reply->isHTML(true);
            $reply->Subject = "Thank You for Booking with Mandas Hotel";
            $reply->Body = "
                <p>Dear {$name},</p>
                <p>Thank you for booking with Mandas Hotel. Our team has received your reservation and will contact you shortly to confirm your details.</p>
                <p>Warm regards,<br><strong>Mandas Hotel Team</strong><br>www.mandashotel.com</p>";
            $reply->send();
        }

        http_response_code(200);
        echo "Message sent successfully!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
