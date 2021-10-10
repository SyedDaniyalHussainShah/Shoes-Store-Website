<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/all-categories.css">
    <title>Adidas Copa</title>
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
                        <li><a href="x ghosted.php">X Ghosted</a></li>
                        <li class="current"><a href="copa.php">Copa</a></li>
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
        <h1>Copa Football Shoes</h1><br>
        <div><p>With adidas Copa soccer cleats, you bring a piece of soccer history to your game. Originally worn at the 1982 world cup in Spain, Copa soccer cleats continue to give players around the world the control they seek on turf, firm ground and indoor surfaces.</p></div>
        
    </div>

    <div class="categories">
       <div class="items">
           <a href="copa 20+.php"><img src="images/Copa_20+_Firm_Ground_Cleats.jpg" alt="" class="pics"><img src="images/Copa_20+_Firmhover.jpg" alt="" class="preview"> Copa 20+ Firm Ground Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="copa 20.1.php"><img src="images/Copa_20.1_Firm_Ground_Boots.jpg" alt="" class="pics"><img src="images/Copa_20.1_Firmhover.jpg" alt="" class="preview"> Copa 20.1 Firm Ground Boots</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="copa 20.3.php"><img src="images/Copa_20.3_Firm_Ground_Cleats.jpg" alt="" class="pics"><img src="images/Copa_20.3_Firmhover.jpg" alt="" class="preview"> Copa 20.3 Firm Ground Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="copa 20.4.php"><img src="images/Copa_20.4_Firm_Ground_Cleats.jpg" alt="" class="pics"><img src="images/Copa_20.4_Firmhover.jpg" alt="" class="preview"> Copa 20.4 Firm Ground Cleats</a>          
       </div>
    </div> 
</body>
</html>