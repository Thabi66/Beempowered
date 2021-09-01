<!--Inclusion of scripts-->
<?php
include ("DatabaseConnect.php");
include ("CDBTables.php");
include ("LoggingActs.php");
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
        <section class="login-clean" style="background: rgba(241,247,252,0);">
            <form method="post">
                <div class="illustration"><img src="assets/img/B-empowered-logo.png" style="width: 100px;">
                    <p style="color: #22a900;font-size: 15px;text-align: left;margin-top: 10px;margin-bottom: 0;"><strong>Login with email/mobile</strong></p>
                </div>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email"></div>
                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password"></div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit" style="background: #22a900; " name="submitMem">Log In</button></div>
				<a class="forgot" href="#">Forgot your email or password?</a>
                <hr><a class="forgot" href="RegistrationPage.php">No Account? Register one</a>
            </form>
        </section>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
</body>

</html>