<?php
$name = $_POST[name];
$email = $_POST[email];
$subject = $_POST[subject];
$message = $_POST[message];


$mailheader = "From: ".$name."<" .$email.">\r\n";

$receipient= "ovishiv008@gmail.com";

// mail(to,subject,message,headers,parameters);

mail($receipient,$subject,$message,$mailheader)
or die("Error!");

?>