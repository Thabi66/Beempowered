<?php
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$C1 = new mysqli($servername, $username, $password);
// Check connection
if ($C1->connect_error) {
  die("Connection failed: " . $C1->connect_error);
}else{
	#echo "active-CSi";
}
?>