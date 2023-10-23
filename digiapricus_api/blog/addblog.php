
<?php

session_start();
require 'dbconnect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$postdata = file_get_contents("php://input");
      if(isset($postdata)&& !empty($postdata))
      {
          $request = json_decode($postdata);
          //request data
          $bimg     = $request->bimg;
          $btitle     = $request->btitle;
          $btxt     = $request->btxt;
          $bdesc     = $request->bdesc;
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
            $bdate=date("d/m/Y");
            $nos=$cr+1;
            $bid = "blog".$nos;        
            $sql = "INSERT INTO blogdata ( `bid`, `bimg`, `bdate`, `btitle`, `btxt`, `bdesc`) 
                      VALUES ('$bid','$bimg', '$bdate', '$btitle', '$btxt', '$bdesc')";
            $result = mysqli_query($conn, $sql);
            if ($result) 
            {
              $showAlert = true; 
              echo 'success';
            }
            else{
              $showAlert = "failed to update your data, please try again";
              echo 'failed-1';
            }     
          }
          else{
            echo("error");
          }
            
      }  
?>