<?php
define("DEBUG", false);
$_SERVER = filter_input_array(INPUT_SERVER,FILTER_SANITIZE_STRING);

define("SERVER", $_SERVER['SERVER_NAME']);
define("DOMAIN", '//' . SERVER);
define("PHP_SELF", $_SERVER['PHP_SELF']);
define("PATH_PARTS", pathinfo(PHP_SELF));
define("BASE_PATH", DOMAIN.PATH_PARTS['dirname'].'/');
define("LIB_PATH", 'lib/');
define('DATABASE_NAME', 'NDESMARA_portfolio');
//print "<p>DOMAIN: ". DOMAIN . "</p>";
//print "<p>PHP_SELF: " . PHP_SELF . "</p>";
//print "<p>PATH_PARTS: " . PATH_PARTS . "</p>";
//print "<p>BASE_PATH" . BASE_PATH . "</p>";
//print "<p>LIB_PATH" . LIB_PATH . "</p>";

