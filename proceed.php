<?php

session_start();
require_once "config.php";  // to clone the code that we have written in config.php
  
  $check = "SELECT cardNum FROM mycard";
  $checkResult = $link->query($check);
  if($_POST['payType'] == "Credit Card"){
        if (!($checkResult->num_rows > 0)){
            header("location: card.php");
        }
        else{
            if(isset($_POST)){
                $userID      = $_SESSION['id'];
                $pName       = $_POST['pName'];
                $price       = $_POST['price'];
                $quantity    = $_POST['quantity'];
                $payType     = $_POST['payType'];
                $pAddress     = $_POST['pAddress'];
                $phone       = $_POST['phone'];
                $pMessage     = $_POST['message'];
                $size        = $_POST['size'];
         
           
             $sql = "INSERT INTO orders(userID,pName,price,quantity,payType,pAddress,phone,pMessage,size) VALUES ('$userID','$pName','$price','$quantity','$payType','$pAddress','$phone','$pMessage', '$size')";
             $stmtinsert = $link -> prepare($sql);
               
             $result = $stmtinsert -> execute ();
                if ($result){
                     header("location: home page.php");
                    }else{
                      echo "There were errors while saving a data.";
                    }
           
             }
            }

  }
  else if($_POST['payType'] == "Cash on delivery"){

    if(isset($_POST)){
  
        $userID      = $_SESSION['id'];
        $pName       = $_POST['pName'];
        $price       = $_POST['price'];
        $quantity    = $_POST['quantity'];
        $payType     = $_POST['payType'];
        $pAddress     = $_POST['pAddress'];
        $phone       = $_POST['phone'];
        $pMessage     = $_POST['message'];
        $size        = $_POST['size'];
 
   
     $sql = "INSERT INTO orders(userID,pName,price,quantity,payType,pAddress,phone,pMessage,size) VALUES ('$userID','$pName','$price','$quantity','$payType','$pAddress','$phone','$pMessage', '$size')";
     $stmtinsert = $link -> prepare($sql);
       
     $result = $stmtinsert -> execute ();
        if ($result){
             header("location: home page.php");
            }else{
              echo "There were errors while saving a data.";
            }
   
     }
  }
  
else {
    echo "error";
  }
  



?>