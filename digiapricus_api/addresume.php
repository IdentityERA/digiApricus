
<?php

session_start();
require 'dbconnect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$postdata = file_get_contents("php://input");

$sql = "SELECT * FROM nurse-reg1 ORDER BY nurseid DESC";
if($result = mysqli_query($conn, $sql)){
  $cr=0;
  while($row = mysqli_fetch_assoc($result))
  {
      $reg_user[$cr]['nurseid'] =$row['nurseid'];
      $reg_user[$cr]['nrdate'] =$row['nrdate'];
      $reg_user[$cr]['nphoto'] =$row['nphoto'];
      $reg_user[$cr]['nfname'] =$row['nfname'];
      $reg_user[$cr]['nlname'] =$row['nlname'];
      $reg_user[$cr]['ngender'] =$row['ngender'];
      $reg_user[$cr]['nage'] =$row['nage'];
      $reg_user[$cr]['nlang'] =$row['nlang'];
      $reg_user[$cr]['nphno'] =$row['nphno'];
      $reg_user[$cr]['nemail'] =$row['nemail'];
      $reg_user[$cr]['npass'] =$row['npass'];
      $reg_user[$cr]['nsts'] =$row['nsts'];
      $cr++;
  }
  $dts=date("Y");
  $nos=$cr+1;
  $nurseid = "Nurse".$dts.$nos; 
  $target_dir = "images/nurse/profile/";
  //mkdir("theindian-healthcare/ihcs_service/images/nurse/profile/hi", "0777");
  mkdir( $target_dir.$nurseid, "0777");
  $target_file = $target_dir.$nurseid."/".basename($_FILES["myFile"]["name"]);
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

