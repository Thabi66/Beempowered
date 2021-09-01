<?php
session_start();

$pozi = $_SESSION['QUT'];
//Remove previous CV inserts
$con = mysqli_connect("localhost","root","","cdb_communitydatabase");
$sqli = "SELECT * FROM `tblfiles` WHERE `FileName` LIKE '".$pozi."' ";
$result = mysqli_query($con, $sqli);
while ($row = mysqli_fetch_array($result)) {
$token = $row['FileName'];
$CVD = $row['Location'];
echo ("$CVD");
//delete file from storage
unlink($CVD);
}
//End of file removal

//Beginning of file addition
if (isset($_POST['CVTUT'])) {
	
	$con = mysqli_connect("localhost","root","","cdb_communitydatabase");
		if (mysqli_connect_errno()) {
		echo "Unable to connect to MySQL! ". mysqli_connect_error();
		}
	
		$target_dir = "CurriculumVitaeStorage/";
		$target_file = $target_dir . $token . basename($_FILES["file"]["name"]);
		
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

		if($imageFileType != "pdf" ||$imageFileType != "jpg" || $imageFileType != "png" || $imageFileType != "jpeg" || $imageFileType != "gif" ) {
		if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
		$files = $token . basename($_FILES["file"]["name"]);
		}else{
		echo "Error Uploading File";
		exit;
		}
		}else{
		echo "File Not Supported";
		exit;
		}
		//Updates table and adds new location for the index
		$location = "CurriculumVitaeStorage/" . $files;
		$sqli = "UPDATE `tblfiles` SET `Location` = '".$location."' WHERE FileName = '".$token."'";
		$result = mysqli_query($con,$sqli);
		
		header("location:UPortal.php");
		}
	
?>