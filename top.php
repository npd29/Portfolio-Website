<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <title>Noel Desmarais' Personal Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Noel Desmarais">
        <meta name="description" content="Noel Desmarais' Personal Website">
        <link rel="icon" type="image/png" href="images/favicon.png">
        <link rel="icon" type="image/png" href="images/favicon32.png">
        <link rel="icon" type="image/png" href="images/favicon128.png">
        <link rel="icon" type="image/png" href="images/favicon180.png">
        <link rel="stylesheet" href="css/custom.css?version=<?php print time(); ?>" type="text/css">
        <link rel="stylesheet" media="(max-width: 800px)" href="css/custom-tablet.css?version=<?php print time(); ?>" type="text/css">
        <link rel="stylesheet" media="(max-width: 600px)" href="css/custom-phone.css?version=<?php print time(); ?>" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet">
        <script src="rules.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
    </head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GTNH7G6WQW"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GTNH7G6WQW');
    </script>
<?php
session_start();
include 'lib/constants.php';


require_once (LIB_PATH . 'DataBase.php');
$thisDBReader = new DataBase('ndesmara_reader', DATABASE_NAME);
$thisDBWriter = new DataBase('ndesmara_writer', DATABASE_NAME);

print '<body class="'.PATH_PARTS['filename'].'">';
print '<!-- ################# Body Element ################# --!>' . PHP_EOL;


print PHP_EOL;
//include 'nav.php';
include 'connect-DB.php';
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $thisDBWriter->insert("INSERT INTO tblVisits SET fldCompany=?", array($id));
}else{
    $thisDBWriter->insert("INSERT INTO tblVisits SET fldCompany=?", array('NULL'));

}
print PHP_EOL;
?>