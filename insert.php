<?php
session_start();
require_once "config.php";  // to clone the code that we have written in config.php

if(isset($_POST)){

     $userID     = $_SESSION['id'];
     $cardNum    = $_POST['cardNum'];
     $cardName   = $_POST['cardName'];
     $cvc        = $_POST['cvc'];
     $expiry     = $_POST['expiry'];

     if(!preg_match("/[0-9]{15,16}/",$cardNum)){

          die("enter valid card number");
     }

  $sql = "INSERT INTO mycard(userID,cardNum,cardName,cvc,expiry) VALUES ('$userID','$cardNum','$cardName','$cvc','$expiry')";
  $stmtinsert = $link -> prepare($sql);



  $check = "SELECT cardNum FROM mycard";
  $checkResult = $link->query($check);
  
  if (!($checkResult->num_rows > 0)){
     $result = $stmtinsert -> execute ();
     if ($result){
          header("location: home page.php");
         }else{
           echo "There were errors while saving a data.";
         }

  }
  else{
       echo "You have already added a credit card";
  }


}else {
  echo "No Data";
}

?>
