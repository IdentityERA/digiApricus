<?php
    $servername = "localhost"; 
    $username = "digiapricus"; 
    $password = "digiapricus@gmt";
    $database = "da_reg";


  //  $servername = "localhost"; 
   // $username = "createth_abrbsg_admin"; 
  //  $password = "abrbsg_admin";
   
  //  $database = "createth_abrbsg_db";
   
     // Create a connection 
     $conn = mysqli_connect($servername, $username, $password, $database);
   
    // Code written below is a step taken
    // to check that our Database is 
    // connected properly or not. If our 
    // Database is properly connected we
    // can remove this part from the code 
    // or we can simply make it a comment 
    // for future reference.
   
    if($conn) {
      
    } 
    else {
        die("Error". mysqli_connect_error()); 
    }
?>