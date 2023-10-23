<?php
session_start();
require 'dbconnect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$postdata = file_get_contents("php://input");
$sql = "SELECT * FROM blogdata ORDER BY bid DESC";
if($result = mysqli_query($conn, $sql)){
  $cr=0;
  while($row = mysqli_fetch_assoc($result))
  {
      $reg_user[$cr]['bid'] =$row['bid'];
      $reg_user[$cr]['bimg'] =$row['bimg'];
      $reg_user[$cr]['bdate'] =$row['bdate'];
      $reg_user[$cr]['btitle'] =$row['btitle'];
      $reg_user[$cr]['btxt'] =$row['btxt'];
      $reg_user[$cr]['bdesc'] =$row['bdesc'];
      $cr++;
  }
  $nos=$cr+1;
  $nbidurseid = "blog".$nos; 
  $target_dir = "images/nurse/profile/";
  //mkdir("theindian-healthcare/ihcs_service/images/nurse/profile/hi", "0777");
  $target_file = $target_dir.$nurseid."/".basename($_FILES["myFile"]["name"]);
  $check = getimagesize($_FILES["myFile"]["tmp_name"]);
  if($check !== false) {
    if (unlink($target_file)) 
    {
      rmdir($target_dir.$nurseid);
      echo("done");
    } 
    else 
    {
      echo "failed-img";
    }
  } 
  else 
  {
    echo "failed-img1"; 
  } 
}
  
?>