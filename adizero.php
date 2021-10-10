<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/all-categories.css">
    <title>Adidas Adizero</title>
</head>
<body>
    <div class="header">
        <ul>
            <a href="home page.php"><img src="images/adidas-logo1.png" alt="" class="logo"></a>
            <li><a href="#">Category</a>

                <div class="menu">
                    <ul>
                        <li><a href="predator.php">Predator</a></li>
                        <li><a href="nemeziz.php">Nemeziz</a></li>
                        <li class="current"><a href="adizero.php">Adizero</a></li>
                        <li><a href="x ghosted.php">X Ghosted</a></li>
                        <li><a href="copa.php">Copa</a></li>
                    </ul>
                </div>

            </li>
            <li>
                <?php
                        if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
                            echo '<a href="sign in.php">Sign in</a>';
                        }
                        else
                            {
                                echo '<a href="#">', htmlspecialchars($_SESSION["username"]),'</a>
                                <div class="menu"> 
                                    <ul> 
                                        <li> <a  href="profile.php">Profile</a> </li> 
                                        <li> <a  href="signout.php">Sign out</a> </li> 
                                    </ul> 
                                </div>';
                            } 
                ?>        
            </li>
            <li><a href="about us.php">ABOUT</a></li>
     
    
        </ul>
    </div>
   
    <div class="intro">   
        <h1>Adizero Football Shoes</h1><br>
        <div><p>When you're preparing for your next football game, adidas adizero shoes and cleats will help you push yourself further and achieve your goals. adizero shoes and cleats are built for speed with ultra-light mesh panels and responsive cushioning.</p></div>
        
    </div>

    <div class="categories">
       <div class="items">
           <a href="adizero 8.0.php"><img src="images/Adizero_8.0_SK_Cleats.jpg" alt="" class="pics"><img src="images/Adizero_8.0hover.jpg" alt="" class="preview"> Adizero 8.0 SK Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="adizero new.php"><img src="images/Adizero_New_Reign_Cleats.jpg" alt="" class="pics"><img src="images/Adizero_Newhover.jpg" alt="" class="preview">Adizero New Reign Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="adizero scorch.php"><img src="images/Adizero_Scorch_Cleats.jpg" alt="" class="pics"><img src="images/Adizero_Scorchhover.jpg" alt="" class="preview">Adizero Scorch Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="adizero spark.php"><img src="images/Adizero_Spark_Molded_Cleats.png" alt="" class="pics"><img src="images/Adizero_Sparkhover.jpg" alt="" class="preview">Adizero Spark Molded Cleats</a>          
       </div>
    </div> 
</body>
</html>