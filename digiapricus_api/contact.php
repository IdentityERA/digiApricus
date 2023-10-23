<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$postdata = file_get_contents("php://input");
if(isset($postdata)&& !empty($postdata))
{
	$request = json_decode($postdata);
//if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
$f_name  =$request->fname;
$email    = $request->email;
$mobile    = $request->mobile;
$cname    = $request->cname;
$message = $request->msg;
// Configuration option.
// Enter the email address that you want to emails to be sent to.
$address = "digiapricus@gmail.com";
$from_address = "info@digiapricus.com";

// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'You\'ve been contacted by: ' . $f_name . '.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "You have been contacted by  : $f_name \r\n"."Their additional message is as follows. \r\n";
$e_content = "Mobile Number : $mobile, \n Comapny Name : $cname, \n The Message is : $message \r\n";
$e_reply = "You can contact $f_name via email:  $email \r\n" ;

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $from_address" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) 
{
	// Email has sent successfully, echo a success page.
	echo "done";
}else echo 'ERROR';
}
?>
