<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Adidas Football Shoes Store</title>
    <link rel="stylesheet" type="text/css" href="css/home page.css">


</head>

<body>
    <div class="header">
        <ul>
            <a href="home page.php" class="current"><img src="images/adidas-logo1.png" alt="" class="logo"></a>
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
            <li><a href="about us.php">ABOUT</a></li>
     
    
        </ul>
    </div>

    <div class="video">

        <a href="nemeziz.php">
             <h1>The New Nemeziz</h1>           
            <video class="new" autoplay loop>
                <source src="videos/adidas1.mp4" type="video/mp4">
            </video>
        </a>
        <video class="adid" autoplay loop>
            <source src="videos/adidas2.mp4" type="video/mp4">
        </video>
        
    </div>
    <!-- Slideshow container -->

    <br>
    <br>
    <h1 class="trend">Trending Items</h1>
    <br>

<div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides">
        <a href="x ghosted .3.php">
            <div class="numbertext">1 / 5</div>
            <video style="width: 100%;" autoplay loop>
                <source src="videos/X Ghosted.3.webm">
            </video>
            <div class="text">X Ghosted .3</div>

        </a>
      </div>
    
    <div class="mySlides">
        <a href="copa 20+.php">
            <div class="numbertext">2 / 5</div>
            <video style="width: 100%;" autoplay loop>
                <source src="videos/Copa 20+ Firm.webm">
            </video>
            <div class="text">Copa 20+ Firm Cleats</div>

        </a>
      </div>

      <div class="mySlides">
          <a href="nemeziz .3.php">
              <div class="numbertext">3 / 5</div>
              <video style="width: 100%;" autoplay loop>
                  <source src="videos/Nemeziz .3.webm">
              </video>
              <div class="text">Nemeziz .3</div>

          </a>
      </div>

      <div class="mySlides">
          <a href="predator 20.3.php">
              <div class="numbertext">4 / 5</div>
              <video style="width: 100%;" autoplay loop>
                  <source src="videos/Predator 20.3 Firm.webm">
              </video>
              <div class="text">Predator 20.3 Firm Cleats</div>

          </a>
      </div>

      <div class="mySlides">
          <a href="adizero new.php">
              <div class="numbertext">5 / 5</div>
              <video style="width: 100%;" autoplay loop>
                  <source src="videos/Adizero New.webm">
              </video>
              <div class="text">Adizero New Reign Cleats</div>

          </a>
      </div>
  
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  
  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>
  </div>
  
    <div class="content">
        
         
        <h3>ADIDAS MEN'S SOCCER CLEATS</h3><br>
        <p>Technology continues to evolve playing fields and performance of men’s soccer shoes on the pitch. Many sports are played on similar surfaces, yet soccer has a diverse range of terrain. The right type of footwear can have a huge impact on performance and personal safety. Use this adidas men's soccer cleat guide for help determining which shoe to wear on synthetic grass, soft and hard grass fields, or out on the street for your most powerful play every time.</p>
        <br><br>

        <h3>Shoes for: Firm Ground (FG), Artificial Turf (AT), Soft Ground (SG)</h3><br>
        <p>Stadium is adidas’ most robust series of men’s soccer cleats to sharpen your craft and master control on various fields. Check out which soccer shoe is best matched with which stadium surface.</p>
        <br><br>

        <h3>Firm Ground Soccer Cleats</h3><br>
        <p>Wear a firm ground adidas soccer cleat to easily ping the ball around on a pitch with natural grass. Most firm ground cleats now have either hard rubber or plastic bladed studs and a combination of bladed and conical studs to ensure proper traction for speed and stability. Artificial fields have become standard enough that FG cleats are a common option for well-used artificial pitches.</p>
        <br><br>
         <hr>
         <br>
         <br>
         <br>

    </div>

<script src="js/home page.js">   
</script>

</body>

</html>