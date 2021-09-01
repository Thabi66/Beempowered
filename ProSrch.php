<?php
session_start();
include ("ConnectionStringIncDB.php");
$BRKER = $_SESSION['Eskerima'];
#Query flip 
		$_SESSION['CREOLE'] = "";
		
		if (isset($_POST['SQAT'])) {
		$query = mysqli_query($C1, "SELECT * FROM `members` WHERE `Proffesion` LIKE '".$BRKER."%' && `Availability` LIKE 'Available' ")
		or die (mysqli_error($C1));
		$_SESSION['CREOLE'] = $query;
		$_SESSION['BRECHO'] = $BRKER;
		}
		
		if(isset($_POST['KXAT'])) {
		$query = mysqli_query($C1, "SELECT * FROM `members` WHERE `PhysicalAddress` LIKE '".$BRKER."%' && `Availability` LIKE 'Available' ")
		or die (mysqli_error($C1));
		$_SESSION['CREOLE'] = $query;
		$_SESSION['BRECHO'] = $BRKER;
		}
		?>