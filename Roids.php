		<?php
		include ("DatabaseConnect.php");
		include ("CDBTables.php");
		session_start();
		
		$C1 = new mysqli($servername, $username, $password, $database);
		$conn = mysqli_connect('localhost', 'root', '', 'cdb_communitydatabase');
		
		$sql1 = "SELECT * FROM Files";
		$result = mysqli_query($conn, $sql1);
		$files = mysqli_fetch_all($result, MYSQLI_ASSOC);
		
		$sql2 = "SELECT * FROM members";
		$result2 = mysqli_query($conn, $sql2);
		$members = mysqli_fetch_all($result2, MYSQLI_ASSOC);

		function test_input($data) {
			$data = trim($data);
			$data = stripcslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
		
		$FnErr = $LnErr = $IdnoErr = $AgErr = $PaErr = $CnErr = $EaErr = $PrErr = $PwErr = "";
		$fn = $ln = $Idno = $Ag = $Pa = $Cn = $Ea = $Pr = $Pw = "";
		
		if($_SERVER["REQUEST_METHOD"] == "POST"){
			
		if (empty($_POST["firstname"])) {
		$FnErr = "First Name is required";
		} else {
		$fn = test_input($_POST["firstname"]);
		}
  
		if (empty($_POST["lastname"])) {
		$LnErr = "Last Name is required";
		} else {
		$ln = test_input($_POST["lastname"]);
		}
		
		if (empty($_POST["idnumber"])) {
		$IdnoErr = "ID Number is required";
		} else {
		$idno = test_input($_POST["idnumber"]);
		}
  
		if (empty($_POST["age"])) {
		$AgErr = "Age is required";
		} else {
		$Ag = test_input($_POST["age"]);
		}
		
		if (empty($_POST["physicaladdress"])) {
		$PaErr = "Physical Address is required";
		} else {
		$Pa = test_input($_POST["physicaladdress"]);
		}
		
		if (empty($_POST["contactnumber"])) {
		$CnErr = "Contact Number is required";
		} else {
		$Cn = test_input($_POST["contactnumber"]);
		}
		
		if (empty($_POST["emailaddress"])) {
		$EaErr = "E-Mail Address is required";
		} else {
		$Ea = test_input($_POST["emailaddress"]);
		}
		
		if (empty($_POST["proffession"])) {
		$PrErr = "Proffession is required";
		} else {
		$Pr = test_input($_POST["proffession"]);
		}
		
		#if (empty($_POST["CV"])) {
		#$ = "Curriculum Vitae is required";
		#} else {
		#$CV = test_input($_POST["CV"]);
		#}
		
		if (empty($_POST["password"])) {
		$PwErr = "Password is required";
		} else {
		$Pw = test_input($_POST["password"]);
		}
		
		}
		
		if(isset($_POST["submit"])){
		$fn=$_POST["firstname"];
		$ln=$_POST["lastname"];
		$idno=$_POST["idnumber"];
		$ag=$_POST["age"];
		$pa=$_POST["physicaladdress"];
		$cn=$_POST["contactnumber"];
		$ea=$_POST["emailaddress"];
		$pr=$_POST["proffession"];
		$pw=$_POST["password"];
		#$cv=$_POST["CV"];
		
		#Session Values
		$_SESSION['EA'] = $ea;
		$_SESSION['FN'] = $fn;
		$_SESSION['LN'] = $ln;
		$_SESSION['IN'] = $idno;
		$_SESSION['PR'] = $pr;
		$_SESSION['CN'] = $cn;
		
		
		$C1 = new mysqli($servername, $username, $password, $database);
		
		$sql = "INSERT INTO `members` 
		(`FirstName`, `LastName`, `IdentificationNumber`, `Age`, `PhysicalAddress`, `ContactNumber`, `eMailAddress`, `Password`, `Proffesion`, `Availability`) 
		VALUES ('$fn', '$ln','$idno', '$ag', '$pa', '$cn', '$ea', '$pw', '$pr','Available')";
		$result = mysqli_query($C1,$sql);
		
		
		$con = mysqli_connect("localhost","root","","cdb_communitydatabase");
		if (mysqli_connect_errno()) {
		echo "Unable to connect to MySQL! ". mysqli_connect_error();
		}
		
		if (isset($_POST['submit'])) {
		$target_dir = "CurriculumVitaeStorage/";
		$target_file = $target_dir . $idno . basename($_FILES["file"]["name"]);
		
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

		if($imageFileType != "pdf" ||$imageFileType != "jpg" || $imageFileType != "png" || $imageFileType != "jpeg" || $imageFileType != "gif" ) {
		if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
		$files = $idno . basename($_FILES["file"]["name"]);
		}else{
		echo "Error Uploading File";
		exit;
		}
		}else{
		echo "File Not Supported";
		exit;
		}
		
		$filename = $idno;
		$location = "CurriculumVitaeStorage/" . $files;
		$sqli = "INSERT INTO `tblfiles` (`FileName`, `Location`) VALUES ('".$filename."','".$location."')";
		$result = mysqli_query($con,$sqli);
		
		if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
		} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
		}
		header("location:ULogin.php");
		}
	}
		
	?>