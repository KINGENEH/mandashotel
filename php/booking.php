<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$required = ['fullname','email','phone','adults','checkin','checkout'];
foreach ($required as $field) {
  if (empty($_POST[$field])) {
    http_response_code(400);
    exit('Missing required field: ' . htmlspecialchars($field));
  }
}

$fullname = trim($_POST['fullname']);
$email    = trim($_POST['email']);
$phone    = trim($_POST['phone']);
$adults   = (int)($_POST['adults'] ?? 1);
$children = (int)($_POST['children'] ?? 0);
$checkin  = trim($_POST['checkin']);
$checkout = trim($_POST['checkout']);
$message  = trim($_POST['message'] ?? '');

echo "<script>try{sessionStorage.setItem('mandas_fullname', " . json_encode($fullname) . ");}catch(e){}</script>";

$subject = "New Booking Request - Mandas Hotel Enugu";
$body = "
<h2>New Booking Request</h2>
<p><strong>Name:</strong> {$fullname}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Phone:</strong> {$phone}</p>
<p><strong>Adults:</strong> {$adults} | <strong>Children:</strong> {$children}</p>
<p><strong>Check-In:</strong> {$checkin}</p>
<p><strong>Check-Out:</strong> {$checkout}</p>
<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
<hr>
<p>Sent from mandashotel.com</p>
";

$composerAutoload = __DIR__ . '/vendor/autoload.php';
$manualPath = __DIR__ . '/PHPMailer';

if (file_exists($composerAutoload)) {
  require $composerAutoload;
} else {
  require $manualPath . '/Exception.php';
  require $manualPath . '/PHPMailer.php';
  require $manualPath . '/SMTP.php';
}

try {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host       = 'mail.mandashotel.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'reservations@mandashotel.com';
  $mail->Password   = 'M.hotel_2025'; // set in cPanel
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port       = 465;

  $mail->CharSet = 'UTF-8';
  $mail->setFrom('reservations@mandashotel.com', 'Mandas Hotel');
  $mail->addAddress('reservations@mandashotel.com', 'Reservations');
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $mail->addReplyTo($email, $fullname);
  }

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body    = $body;
  $mail->AltBody = strip_tags(str_replace(["<br>","<br/>","<br />"], "\n", $body));

  $mail->send();
  header('Location: ../thank-you.html');
  exit;

} catch (Exception $e) {
  http_response_code(500);
  echo 'Mailer Error: ' . htmlspecialchars($mail->ErrorInfo);
}
