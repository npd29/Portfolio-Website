<?php
$phpSelf = htmlspecialchars($_SERVER['PHP_SELF']);
$path_parts = pathinfo($phpSelf);
?>
<nav>
<!--    --><?php
//    include 'header.php';
//if ($path_parts['filename'] == 'index'){
//    print '<a class = "active" href = "index.php" >Home</a>
//    <a href = "search.php">Search</a>
//    <a href = "aboutUs.php">About Us</a>';
//        if ($_SESSION['loggedin'] == true) {
//            print '<a href = "mySpace.php">'.$_SESSION['name'].'</a>';
//        }else{
//        print '<a href = "logIn.php">Log In</a>';
//        }
//}
//
//elseif ($path_parts['filename'] == 'search'){
//    print '<a href = "index.php">Home</a>
//    <a class = "active" href = "search.php">Search</a>
//    <a href = "aboutUs.php">About Us</a>';
//    if ($_SESSION['loggedin'] == true) {
//        print '<a href = "mySpace.php">'.$_SESSION['name'].'</a>';
//    }else{
//        print '<a href = "logIn.php">Log In</a>';
//    }
//}
//elseif ($path_parts['filename'] == 'aboutUs'){
//    print '<a href = "index.php">Home</a>
//    <a href = "search.php">Search</a>
//    <a class = "active" href = "aboutUs.php">About Us</a>';
//    if ($_SESSION['loggedin'] == true) {
//        print '<a href = "mySpace.php">'.$_SESSION['name'].'</a>';
//    }else{
//        print '<a href = "logIn.php">Log In</a>';
//    }
//}
//elseif ($path_parts['filename'] == 'mySpace'){
//    print '<a href = "index.php">Home</a>
//    <a href = "search.php">Search</a>
//    <a href = "aboutUs.php">About Us</a>';
//    if ($_SESSION['loggedin'] == true) {
//        print '<a class="active" href = "mySpace.php">'.$_SESSION['name'].'</a>';
//    }else{
//        print '<a class="active" href = "logIn.php">Log In</a>';
//    }
//}
//
//else{
//    print '<a href = "index.php">Home</a>
//    <a href = "search.php">Search</a>
//    <a href = "aboutUs.php">About Us</a>';
//    if ($_SESSION['loggedin'] == true) {
//        print '<a href = "mySpace.php">'.$_SESSION['name'].'</a>';
//    }else{
//        print '<a href = "logIn.php">Log In</a>';
//    }
//}
//if($_SESSION['loggedin'] == true) {
//    ?>
<!--<a href=logout.php>Log Out</a>-->
<?php
//}?>
</nav>