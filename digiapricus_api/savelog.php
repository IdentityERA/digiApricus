
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
          $displayname     = $request->displayname;
          $city     = $request->city;
          $state    = $request->state;
          $country  = $request->country;
          $pincode  = $request->pincode;
          $datetime = $request->datetime;
          $lang     = $request->lang;
          $lat      = $request->lat;
          $sql = "INSERT INTO log_data ( `displayname`, `city`, `state`, `country`, `pincode`, `datetime`, `lang`, `lat`) 
                      VALUES ('$displayname','$city', '$state', '$country', '$pincode', '$datetime', '$lang', '$lat')";
          $result = mysqli_query($conn, $sql);
          if ($result) 
            {
              $showAlert = true; 
              echo 'success';
            }
            else{
              $showAlert = "failed to update your data, please try again";
              echo 'failed';
            }    
      }  
?>