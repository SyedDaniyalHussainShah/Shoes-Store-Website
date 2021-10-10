<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/all-categories.css">
    <title>Adidas Predator</title>
</head>
<body>
    <div class="header">
        <ul>
            <a href="home page.php"><img src="images/adidas-logo1.png" alt="" class="logo"></a>
            <li><a href="#">Category</a>

                <div class="menu">
                    <ul>
                        <li class="current"><a href="predator.php">Predator</a></li>
                        <li><a href="nemeziz.php">Nemeziz</a></li>
                        <li><a href="adizero.php">Adizero</a></li>
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
        <h1>Predator Football Shoes</h1><br>
        <div><p>Predator are based on a prototype concept from the Australian former footballer Craig Johnston. The common feature of the Predator range is the presence of rubber patches or strips on the top of the shoe, designed to increase friction between the boot and the ball.</p></div>
        
    </div>
    

    <div class="categories">
       <div class="items">
           <a href="predator 20.3.php"><img src="images/Predator_20.3_Firm.jpg" alt="" class="pics"><img src="images/Predator_20.3hover.jpg" alt="" class="preview">Predator 20.3 Firm Cleats</a>          
       </div>
       <br>
       <br>

       <div class="items">
        <a href="predator mutator 20.1.php"><img src="images/Predator_Mutator_20.1_Low_Firm.jpg" alt="" class="pics"><img src="images/Predator_Mutator_20.1hover.jpg" alt="" class="preview">Predator Mutator 20.1 Low Firm</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="Predator_20.4.php"><img src="images/Predator_20.4_Flexible_Cleats.jpg" alt="" class="pics"><img src="images/Predator_20.4hover.jpg" alt="" class="preview">Predator 20.4 Flexible Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="Predator_Mutator 20.3 Laceless.php"><img src="images/Predator_Mutator_20.3_Laceless_Cleats.jpg" alt="" class="pics"><img src="images/Predator_Mutator_20.3hover.jpg" alt="" class="preview">Predator Mutator 20.3 Laceless Cleats</a>          
       </div>
    </div> 
</body>
</html>