<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/all-categories.css">
    <title>Adidas Nemeziz</title>
</head>
<body>
    <div class="header">
        <ul>
            <a href="home page.php"><img src="images/adidas-logo1.png" alt="" class="logo"></a>
            <li><a href="#">Category</a>

                <div class="menu">
                    <ul>
                        <li><a href="predator.php">Predator</a></li>
                        <li class="current"><a href="nemeziz.php">Nemeziz</a></li>
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
        <h1>Nemeziz Football Shoes</h1><br>
        <div><p>A pair of adidas Nemeziz soccer cleats will unleash your true potential on the pitch. Be like Messi and out run your opponents every time. Enhancing your agility, the adidas Nemeziz football boots feature innovative technology designed to make you untouchable on the pitch.</p></div>
        
    </div>

    <div class="categories">
       <div class="items">
           <a href="nemeziz +.php"><img src="images/Nemeziz+_Firm_Cleats.jpg" alt="" class="pics"><img src="images/Nemeziz+_Firmhover.jpg" alt="" class="preview">Nemeziz + Firm Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="nemeziz .3.php"><img src="images/Nemeziz_.3_Turf_Cleats.jpg" alt="" class="pics"><img src="images/Nemeziz_.3_Turfhover.jpg" alt="" class="preview">Nemeziz .3 Turf Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="nemeziz 19.2.php"><img src="images/Nemeziz_19.2_Firm_Cleats.jpg" alt="" class="pics"><img src="images/Nemeziz_19.2_Firmhover.jpg" alt="" class="preview">Nemeziz 19.2 Firm Cleats</a>          
       </div>
       &nbsp;
       &nbsp;

       <div class="items">
        <a href="nemeziz 19.3.php"><img src="images/Nemeziz_19.3_Firm_Ground_Cleats.jpg" alt="" class="pics"><img src="images/Nemeziz_19.3_Firmhover.jpg" alt="" class="preview">Nemeziz 19.3 Firm Ground Cleats</a>          
       </div>
    </div> 
</body>
</html>