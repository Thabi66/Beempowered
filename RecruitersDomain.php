<!--Inclusion of scripts-->
<?php
#error_reporting(E_ERROR | E_PARSE);
include ("DatabaseConnect.php");
include ("CDBTables.php");
include ("ConnectionStringIncDB.php");
include ("ProSrch.php");

?>

<!doctype html>
<html lang="en">

<head>
<title>B-EmpoweredProfile</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="description" content="Lorem Ipsum">
<meta name="author" content="Afrinile">

<link rel="icon" href="./fav-icon.ico" type="image/x-icon" />
<!-- VENDOR CSS -->
<link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/vendor/font-awesome/css/font-awesome.min.css">

<link rel="stylesheet" href="./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css">

<script type="text/javascript" src="JS/JSDoc.js"></script>

<!-- MAIN CSS -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/blog.css">
<link rel="stylesheet" href="assets/css/color_skins.css">
</head>
<body class="theme-green">

<!-- Overlay For Sidebars -->

<div id="wrapper">

    <nav class="navbar navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-btn">
                <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
            </div>

            <div class="navbar-brand">
                <a href="index.html"><img src="./assets/images/logo-icon.png" alt="B-Empowered Logo" class="img-responsive logo"></a>                
            </div>
            
            <div class="navbar-right">            

                <div id="navbar-menu">
                    <ul class="nav navbar-nav">                        
                            <ul class="dropdown-menu notifications animated shake">
                                <li class="header"><strong>You have 4 new Notifications</strong></li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-info text-warning"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Campaign <strong>Holiday Sale</strong> is nearly reach budget limit.</p>
                                                <span class="timestamp">10:00 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>                               
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-like text-success"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Your New Campaign <strong>Holiday Sale</strong> is approved.</p>
                                                <span class="timestamp">11:30 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                 <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-pie-chart text-info"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Website visits from Twitter is 27% higher than last week.</p>
                                                <span class="timestamp">04:00 PM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-info text-danger"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Error on website analytics configurations</p>
                                                <span class="timestamp">Yesterday</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="footer"><a href="javascript:void(0);" class="more">See all notifications</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <ul class="dropdown-menu user-menu menu-icon animated bounceIn">
                                <li class="menu-heading">ACCOUNT SETTINGS</li>
                                <li><a href="javascript:void(0);"><i class="icon-note"></i> <span>Basic</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-equalizer"></i> <span>Preferences</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-lock"></i> <span>Privacy</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-bell"></i> <span>Notifications</span></a></li>
                                <li class="menu-heading">BILLING</li>
                                <li><a href="javascript:void(0);"><i class="icon-credit-card"></i> <span>Payments</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-printer"></i> <span>Invoices</span></a></li>                                
                                <li><a href="javascript:void(0);"><i class="icon-refresh"></i> <span>Renewals</span></a></li>
                            </ul>
                        </li>
                        <li><a href="logoff.php" class="icon-menu"><i class="icon-login"></i></a></li>                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="BDYCNTNT" style="margin:auto; padding-top:80px; width:80%;">
	<h1>CDB - Community Database Viewer</h1>
	<p>Listed below are all the members available for hire. their contact information will be listed below </p>
	<br>
	<div class="SearchUp">
	 
		<form style="border:none;" action=" " method="POST">
			<label style="font-weight:bold;">Search by Proffession</label><br>
			<input value="" style="width:40%;" name='VTS' type="text" ID='VTS' placeholder="Proffession"></input>
			<button style="padding-left:20px;" name='SQAT' id="SQAT">Search</button>
		</form>
		<?php
		$_SESSION['Eskerima'] = $_POST['VTS'];
		
		?>
	</div>
	
	<!--Table opened on startup showing users registered in database-->
	<!--<p>Showing results for: <b><?php echo($_SESSION['BRECHO']);?></b></p>-->
	<div class="OverflowingTable" style="height:300px;overflow:auto;padding-top:20px;" enctype="multipart/form-data">
	<table id="StpRads" border="1" align="center" width="100%">
		<tr>
		<td>Index</td>
		<td>First Name</td>
		<td>Last Name</td>
		<td>Proffesion</td>
		<td>Contact Number</td>
		<td>E-Mail Number</td>
		</tr>
			<?php
			$C1 = new mysqli($servername, $username, $password, $database);
			
			while ($row = mysqli_fetch_array($_SESSION['CREOLE'])) {
			echo
			"<tr>
			<td>{$row['ID']}</td>
			<td>{$row['FirstName']}</td>
			<td>{$row['LastName']}</td>
			<td>{$row['Proffesion']}</td>
			<td>{$row['ContactNumber']}</td>
			<td>{$row['eMailAddress']}</td>
			";}
			?>
		</tr>
		</table>
		
	</div>
	<a href="Logoff.php" style="padding-top:20px;"><button style="float:right;">Close Page</button></a>
		</div>
		

</body>
</html>