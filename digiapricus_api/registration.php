
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
          $nrdate     = $request->nrdate;
          $nphoto     = $request->nphoto;
          $nfname     = $request->nfname;
          $nlname     = $request->nlname;
          $ngender    = $request->ngender;
          $nage       = $request->nage;
          $nlang      = $request->nlang;
          $nphno      = $request->nphno;
          $nemail     = $request->nemail;
          $npass      = $request->npass;
          $nsts      = $request->nsts;
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
            $sql = "Select * from nurse-reg1 where nemail='$nemail' or nphno ='$nphno'";
            $result = mysqli_query($conn, $sql);
            $num = mysqli_num_rows($result); 
            if($num == 0) 
            {
              $sql = "INSERT INTO nurse-reg1 ( `nurseid`, `nrdate`, `nphoto`, `nfname`, `nlname`, `ngender`, `nage`, `nlang`, `nphno`, `nemail`, `npass`, `nsts`) 
                       VALUES ('$nurseid','$nrdate', '$nphoto', '$nfname', '$nlname', '$ngender', '$nage', '$nlang', '$nphno', '$nemail', '$npass', '$nsts')";
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
          else
          { 
            $showError = "You are already register, please contact the administrator";
            echo 'failed'; 
          }      
          }
          else{
            echo("error");
          }
            
      }  
?>