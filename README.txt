Mandas Hotel Homepage (v2)
==========================

This project is a single-page responsive website for Mandas Hotel, built with Bootstrap, JavaScript, and PHPMailer (SMTP ready).

------------------------------------------------------------
📁 FOLDER STRUCTURE
------------------------------------------------------------
mandas-hotel-homepage-v2/
│
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
│       ├── mandaslogo.png
│       ├── bg1.jpg
│       ├── bg2.jpg
│
├── php/
│   ├── mailer.php
│   └── PHPMailer/
│       ├── PHPMailer.php
│       ├── SMTP.php
│       └── Exception.php
│
└── README.txt

------------------------------------------------------------
⚙️ SETUP INSTRUCTIONS
------------------------------------------------------------
1️⃣ Upload all files to your hosting account:
   - Use cPanel File Manager or an FTP client.
   - Place all files inside your public_html directory.

2️⃣ Edit mailer.php:
   - Open php/mailer.php
   - Find these lines and update them:
       $mail->Username = 'reservations@mandashotel.com';
       $mail->Password = 'YourEmailPassword';
   - Replace 'YourEmailPassword' with your real email password.

3️⃣ Confirm SMTP Settings:
   - Host: mail.mandashotel.com
   - Port: 465
   - Encryption: SSL
   - Authentication: ON

4️⃣ Test the Booking Form:
   - Open your site (e.g. https://www.mandashotel.com)
   - Fill in the booking form and submit.
   - You should receive an email at reservations@mandashotel.com
   - The guest also gets an automatic thank-you email.

------------------------------------------------------------
🧩 CUSTOMIZATION
------------------------------------------------------------
- Change hero background images:
    → Replace 'bg1.jpg' and 'bg2.jpg' in /assets/img/
- Change logo:
    → Replace 'mandaslogo.png'
- Edit text and hero headings:
    → Open index.html and find the <header> section.
- Accent color (gold tone):
    → In /assets/css/style.css, search for #d4af37 to adjust color.
- Update phone number, social links, or address:
    → Modify in index.html (footer and floating icons section).

------------------------------------------------------------
📍 GOOGLE MAP
------------------------------------------------------------
To update the Google Map location:
- Find the <iframe> in the footer of index.html
- Replace the src URL with your new Google Maps embed link.

------------------------------------------------------------
✅ DONE
------------------------------------------------------------
Once uploaded, the site should immediately:
- Show your homepage with hero slider.
- Allow users to submit booking forms.
- Send booking requests directly to reservations@mandashotel.com.
