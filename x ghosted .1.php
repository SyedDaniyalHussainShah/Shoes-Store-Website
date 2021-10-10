<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>X GHOSTED .1 Firm Ground Soccer Cleats</title>
    <link rel="stylesheet" type="text/css" href="css/items.css">


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
        <li><a href="about us.php">ABOUT</a></li>
 

    </ul>
</div>

    <div class="container">

      
        <div class="mySlides">
            <div class="numbertext">1 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm1.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">2 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm2.jpg">
          </div>
          
          <div class="mySlides">
            <div class="numbertext">3 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm3.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">4 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm4.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">5 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm5.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">6 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm6.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">7 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm7.jpg">
          </div>
        
          <div class="mySlides">
            <div class="numbertext">8 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm8.jpg">
          </div>
          
          <div class="mySlides">
            <div class="numbertext">9 / 9</div>
              <img class = "pics" src="images/item images/X_Ghosted.1_Firm9.jpg">
          </div>
        
          <!-- Next and previous buttons -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        
          <!-- Image text -->
          <div class="caption-container">
            <p id="caption"></p>
          </div>
        
          <!-- Thumbnail images -->
          <div class="row">
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm1.jpg" onclick="currentSlide(1)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm2.jpg" onclick="currentSlide(2)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm3.jpg" onclick="currentSlide(3)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm4.jpg" onclick="currentSlide(4)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm5.jpg" onclick="currentSlide(5)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm6.jpg" onclick="currentSlide(6)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm7.jpg" onclick="currentSlide(7)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm8.jpg" onclick="currentSlide(8)">
            </div>
            
            <div class="column">
              <img class="demo cursor" src="images/item images/X_Ghosted.1_Firm9.jpg" onclick="currentSlide(9)">
            </div>
             
          </div>



</div>

<br>

<div class="info-box">
    <div class="description">
        <h1>Description</h1><br>
        <h3>BE A BLUR ON FIRM GROUND IN THESE LIGHTWEIGHT CLEATS.</h3><br>
        <p>See these? Your rivals won't. Fast used to be fast enough. But you're about to leave all that behind. Gear up and ghost everyone in these adidas X Ghosted.1 firm ground soccer cleats. Get the perfect push-off thanks to a sprint spike-style raised forefoot and a springy carbon-fiber insert in the outsole. Low-profile and lightweight, the upper locks you in while leaving your ankles free to shift up the gears.</p>
    </div>
    
    
    
</div>

<div class="info-box">
    <div class="specs">
        <h1>Specifications</h1><br>
           <ul>
               <li>Regular fit</li>
               <li>Laced vacuum fit</li>
               <li>Textile upper</li>
               <li>Low-cut collar for ease of movement</li>
               <li>Tension Tape for a personalized fit</li>
               <li>Flexible Torsion System</li>
               <li>Imported</li>
               <li>Product color: Cloud White / Core Black / Met.Gold Melange</li>
           </ul>
    
    </div>
    </div>


    <div class="buy">
    <form method="get" action="purchase form.php">
        <input type="hidden" name="varname" value="X GHOSTED .1 Firm Ground Soccer Cleats">
        <input type="hidden" name="varprice" value="38700">
        <h1>X GHOSTED .1 Firm Ground Soccer Cleats</h1>
        <br>
        <div class="price-now">Rs 38700</div>
        <div class="shoe-size">

            <select class="size" name="size" id="size">
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <br>
                <label for="quantity">Quantity (Max 10):</label>
                <input type="number" id="quantity" name="quantity" required min="1" max="10" style="background:black; color:white;">
                <button class="button">Buy Now</button>
              </form>
            
        </div>

    </div>
    <script src="js/items.js">
    </script>

</body>

</html>