<?php
$toAddress = $_POST['toAddress'];

$subject = "Test Mail from PHP";


$message = $_POST['content'];


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <selvaganesh93@gmail.com>' . "\r\n";
$headers .= 'Cc: abirami.vaishnavi@gmail.com' . "\r\n";

mail($toAddress,$subject,$message,$headers);
echo "Mail Sent";
?>