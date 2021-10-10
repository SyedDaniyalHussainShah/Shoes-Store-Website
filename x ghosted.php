<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/all-categories.css">
    <title>Adidas X Ghosted</title>
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
                        <li><a href="adizero.php">Adizero</a></li>
                        <li class="current"><a href="x ghosted.php">X Ghosted</a></li>
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
        <h1>X Ghosted Football Shoes</h1><br>
        <div><p>X Ghosted is the first football boot available at scale with the integration of a dynamic carbon plate. The stud configuration is also improved and with a toe spring, allowing on-demand lineal bursts while also providing the support for explosive, agile movement.</p></div>
        
    </div>

    <div class="categories">
       <div class="items">
           <a href="x ghosted .1.php"><img src="images/X_Ghosted.1_Firm_Ground_Soccer.jpg" alt="" class="pics"><img src="images/X_Ghosted.1_Firmhover.jpg" alt="" class="preview">X Ghosted .1 Firm Ground Soccer</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="x ghosted .2.php"><img src="images/X_Ghosted.2_Firm_Ground_Soccer.jpg" alt="" class="pics"><img src="images/X_Ghosted.2_Firmhover.jpg" alt="" class="preview">X Ghosted .2 Firm Ground Soccer</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="x ghosted .3.php"><img src="images/X_Ghosted.3_Turf_Soccer.jpg" alt="" class="pics"><img src="images/X_Ghosted.3_Turfhover.jpg" alt="" class="preview">X Ghosted .3 Turf Soccer</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="x ghosted .4.php"><img src="images/X_Ghosted.4_Indoor_Shoes.jpg" alt="" class="pics"><img src="images/X_Ghosted.4_Indoorhover.jpg" alt="" class="preview">X Ghosted .4 Indoor Shoes</a>          
       </div>
    </div> 
</body>
</html>