 <?php
include("ConnectionString.php");
// Create database
$sql = "CREATE DATABASE IF NOT EXISTS CDB_CommunityDatabase";
if ($C1->query($sql) === TRUE) {
  #echo "Database created successfully";
} else {
  echo "Error creating database: " . $C1->error;
}
$C1->close();
?> 