<?php
include ("DatabaseConnect.php");
include ("CDBTables.php");
session_start();
if(isset($_POST["submitMem"])){
		
		$MemMail= $_POST["email"];
		$MemPass= $_POST["password"];
		
		$C1 = new mysqli($servername, $username, $password, $database);
		
		$query = "SELECT * FROM Members WHERE eMailAddress = '$MemMail' AND Password = '$MemPass'";
		$result = mysqli_query($C1,$query);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$x = $row["eMailAddress"];
		$y = $row["Password"];
		$RadFN = $row["FirstName"];
		$RadLN = $row["LastName"];
		$RadIN = $row["IdentificationNumber"];
		$RadPR = $row["Proffesion"];
		$RadCN = $row["ContactNumber"];
		
		#Session Values
		$_SESSION['EA'] = $x;
		$_SESSION['FN'] = $RadFN;
		$_SESSION['LN'] = $RadLN;
		$_SESSION['IN'] = $RadIN;
		$_SESSION['PR'] = $RadPR;
		$_SESSION['CN'] = $RadCN;
		
		if(empty($MemMail && $MemPass)){
		$output = "Please eneter details";
		}
		else { 
		if($x == $MemMail && $y == $MemPass) 
		{
			header("location:UPortal.php");
		}else {
			echo "Incorrect Username\Password";}
		}
		}else{
			
		}

		
		if(isset($_POST["submitAdm"])){
			
		$AdmUsername= $_POST["username"];
		$AdmPass= $_POST["password"];
		
		$C1 = new mysqli($servername, $username, $password, $database);
		
		$query = "SELECT Username, Password FROM Administrators WHERE Username = '$AdmUsername' AND Password = '$AdmPass'";
		$result = mysqli_query($C1,$query);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
		$x = $row["Username"];
		$y = $row["Password"];
		
		#if(empty($MemMail && $MemPass)){
		#$output = "Please eneter details";
		#}
		#else { 
		if($x == $AdmUsername && $y == $AdmPass) 
		{
		header("location:APortal.php");}
		else {
		echo "Incorrect Username\Password";}
		}
		#}else{
			
		#}
?>