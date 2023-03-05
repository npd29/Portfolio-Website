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
    </head>
<?php
session_start();
include 'lib/constants.php';

print '<body class="'.PATH_PARTS['filename'].'">';
print '<!-- ################# Body Element ################# --!>' . PHP_EOL;

require_once (LIB_PATH . 'DataBase.php');
$thisDBReader = new DataBase('ndesmara_reader', DATABASE_NAME);
$thisDBWriter = new DataBase('ndesmara_writer', DATABASE_NAME);

print '<body class="'.PATH_PARTS['filename'].'">';
print '<!-- ################# Body Element ################# --!>' . PHP_EOL;


print PHP_EOL;
//include 'nav.php';
include 'connect-DB.php';
print PHP_EOL;
?>