
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
  $bid = "Blog".$nos; 
  $target_dir = "images/";
  //mkdir("myapi/blog/images/hi", "0777");
  mkdir( $target_dir.$bid, "0777");
  $target_file = $target_dir.$bid."/".basename($_FILES["myFile"]["name"]);
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
  // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["myFile"]["tmp_name"]);
    if($check !== false) {
      if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)) 
      {
        echo $target_file;
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
else{
  echo("error");
}





?>

