<?php
session_start();
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: sign in.php");
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/purchase form.css">
    <title>Confirm order</title>
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



    <div class="box">
        <h1>Confirm order</h1><br><br>
        <form action="proceed.php" method="post" id="purchaseform" onsubmit="return validation()">
            <label for="pName">Product Name:</label>
            <input type="text" id="pName" name="pName" value="<?php echo htmlspecialchars($_GET['varname']); ?>" readonly><br>
            <input type="hidden" name="pagee" value="<?php echo $_SERVER['HTTP_REFERER'] ?>" readonly><br>

            <label for="receiverName">Receiver's Name &nbsp;</label>
            <input type="text" id="receiverName" name="cardName" value="<?php echo htmlspecialchars($_SESSION["username"]); ?>"><br>
            <div id="name_Blanked">Name can't be blanked</div>
            
            <label for="address">Delivery Address &nbsp;</label>
            <input type="text" id="address" name="pAddress" placeholder="Address"><br>
            <div id="address_Blanked">Address can't be blanked</div>
            <div id="address_Characters">Address should have atleast 20 characters</div>
            
            <label for="contact">Contact Number &nbsp;</label>
            <input type="text" id="contact" name="phone" placeholder="Phone Number"><br>
            <div id="contact_Blanked">Phone number can't be blanked</div>
            <div id="contact_Digits">Phone number should have atleast 8 digits</div>
            <div id="contact_Error">Phone number should be in digits</div>

            <label for="quantity">Quantity &nbsp</label>
            <input type="text" name="quantity" value="<?php echo htmlspecialchars($_GET['quantity']); ?>" readonly><br>

            <label for="quantity">Size &nbsp</label>
            <input type="text" name="size" value="<?php echo htmlspecialchars($_GET['size']); ?>" readonly><br>

            <label for="price">Total &nbsp</label>
            <input type="text" name="price" value="<?php echo htmlspecialchars($_GET['varprice'] * $_GET['quantity']); ?>" readonly><br>

            <label for="message">Message (optional) &nbsp;</label><br><br>
            <textarea name="pMessage" id="" cols="30" rows="10" placeholder="Message"></textarea><br>
            
            <h3>Select Payment Method</h3><br>
            <label for="cod">Cash on delivery &nbsp</label>
            <input type="radio" id="cod" name="payType" value="Cash on delivery" required="required" ><br><br>
            <label for="card">Credit Card &nbsp &nbsp &nbsp &nbsp &nbsp</label>
            <input type="radio" id="card" name="payType" value="Credit Card" required="required" ><br><br>

            <input type="submit" value="Proceed">
        </form>
        <script src="js/Purchase form.js"></script>
        
    </div>
</body>
</html>