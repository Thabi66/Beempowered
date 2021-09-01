<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "CDB_CommunityDatabase";
// Create connection
$C1 = new mysqli($servername, $username, $password, $database);
// Check connection
if ($C1->connect_error) {
  die("Connection failed: " . $C1->connect_error);
}{
	#echo "active-CSIDB";
}
?>