<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = 'Тема листа';
$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try{
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;

    // настройки почты 
    $mail->Host = 'smtp.gmail.com' //SMTP сервер вашей почты
    $mail->Username = 'maxkashanov@gmail.com'
    $mail->Password = 'zkof kezz xgjs nldv';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('maxkashanov@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('maxkashanov@gmail.com');
  

//   oтправка сообщений
    $mail->isHTML(true);
    $mail->Subject= $title;
    $mail->Body = $body;

    $mail->send();

   
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
} catch (Exception $e) {
    $status = "Повідомлення не було відправлено. Причина помилки: {$mail->ErrorInfo}";
}