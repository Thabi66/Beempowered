 <!--Inclusion of scripts-->
 <?php
include ("DatabaseConnect.php");
include ("CDBTables.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>B-Empowered</title>
    <link rel="shortcut icon" href="assets/img/fav-icon.ico" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Footer-Basic.css">
    <link rel="stylesheet" href="assets/css/Header-Blue.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="assets/css/Login-Form-Clean.css">
    <link rel="stylesheet" href="assets/css/Navigation-with-Button.css">
    <link rel="stylesheet" href="assets/css/Registration-Form-with-Photo.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
		<div>
		<section class="register-photo" style="background: rgba(241,247,252,0);">
		<div class="text-center d-lg-flex justify-content-lg-center align-items-lg-center form-container">
		<form action="Roids.php" method="POST" enctype="multipart/form-data">
		<img src="assets/img/B-empowered-logo-Icon-green.png" style="width: 100px;">
		<h2 class="text-center" style="color: #22a900;"><strong>Create Fortune Account</strong></h2>
		<div class="mb-3"><input class="form-control" type="text" placeholder="First Name" name="firstname"></div>
		<div class="mb-3"><input class="form-control" type="text" placeholder="Last Name" name="lastname"></div>
		<div class="mb-3"><input class="form-control" type="int" placeholder="Identification Number" name="idnumber"></div>
		<div class="mb-3"><input class="form-control" type="date" name="age" value="2021/01/01"></div>
		<div class="mb-3"><input class="form-control" type="text" placeholder="Physical Address" name="physicaladdress"></div>
		<div class="mb-3"><input class="form-control" type="int" placeholder="Mobile Number" name="contactnumber"></div>
		<div class="mb-3"><input class="form-control" type="email" placeholder="Email Address" name="emailaddress"></div>
		<div class="mb-3"><input class="form-control" name="proffession" placeholder="proffession"></div>
		<div class="mb-3"><input class="form-control" style="height:auto;" type="file" class="form-control" name="file" id="file"></div>
		<div class="mb-3"><input class="form-control" type="password" placeholder="Enter Password" name="password"></div>
		<div class="mb-3"><input class="form-control" type="password" placeholder="Re-Enter Password" name="password2"></div>
		<div class="mb-3"><button class="form-control" type="submit" name="submit">Register</button></div>
		</div>
		</form>
		</div>
		</section>
		</div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
</body>

</html>