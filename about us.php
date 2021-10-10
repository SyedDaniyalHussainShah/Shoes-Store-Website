<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/about us.css">
    <title>About Us</title>
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
            <li class="current"><a href="about us.php">ABOUT</a></li>
     
    
        </ul>
    </div>


    <div class="content">
        <h1>About Adidas</h1><br><br>
        
        <p>
            Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the holding company for the Adidas Group, which consists of the Reebok sportswear company, 8.33% of the German football club Bayern München, and Runtastic, an Austrian fitness technology company. Adidas' revenue for 2018 was listed at €21.915 billion.
        </p>
        <br><br>

        <h3>History</h3><br>
        <p>
            The company was started by Adolf Dassler in his mother's house; he was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory"). Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber. Dassler persuaded U.S. sprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas, and Rudolf established Puma, which became Adidas' business rival.
        </p>

        <br><br><br>
        <h1>This Website</h1>
        <br><br>
        <p>
            This an online Adidas Football shoes shopping website. From this website people can buy different types of football shoes. The is not the official website of Adidas, but the idea of this website is taken from the official Adidas website. This website only contains the football shoes of Adidas brand.
        </p>
        <br><br>
        <h3>Purpose</h3><br>
        <p>
            This is university project based website created by a group of students of COMSATS University Islamabad, Abbottabad Campus. Group of four students including <span><em>Syed Daniyal Hussain Shah</em></span>, <span><em>Shah Zeb</em></span>, <span><em>Hashaam Khan</em></span>, and <span><em>Ahmad Ibrar</em></span>.
        </p>
        <br><br><br>
        <h1>Contact</h1>
        <br>
        <h3>Mail us at given address</h3><br>
        <h5>Syed Daniyal Hussain Shah</h5>
        <p>&nbsp; &nbsp; sp19-bse-060@cuiatd.edu.pk</p><br><br>
        <h5>Shah Zeb</h5>
        <p>&nbsp; &nbsp; sp19-bse-051@cuiatd.edu.pk</p><br><br>
        <h5>Hashaam Khan</h5>
        <p>&nbsp; &nbsp; sp19-bse-041@cuiatd.edu.pk</p><br><br>
        <h5>Ahmad Ibrar</h5>
        <p>&nbsp; &nbsp; sp19-bse-0044@cuiatd.edu.pk</p><br><br>
        
    </div>

    <br><br>
         <hr>
         <br>
         <br>
         <br>
</body>
</html>