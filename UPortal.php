<!--Inclusion of scripts-->
<?php
		include ("DatabaseConnect.php");
		include ("CDBTables.php");
		session_start();

		$C1 = new mysqli($servername, $username, $password, $database);
				
		$sql1 = "SELECT * FROM files";
		$result = mysqli_query($C1, $sql1);
		$files = mysqli_fetch_all($result, MYSQLI_ASSOC);
		
		$sql2 = "SELECT * FROM members";
		$result2 = mysqli_query($C1, $sql2);
		$members = mysqli_fetch_all($result2, MYSQLI_ASSOC);

		function test_input($data) {
			$data = trim($data);
			$data = stripcslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
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

    <div id="main-content" class="profilepage_2 blog-page">
	<center>
		<?php
		$conn = mysqli_connect('localhost', 'root', '', 'cdb_communitydatabase');
		
		$Email = $_SESSION['EA'];

		$sql1 = "SELECT * FROM files WHERE Email='$Email'";
		$result = mysqli_query($conn, $sql1);
		$files = mysqli_fetch_all($result, MYSQLI_ASSOC);
		
		$sql2 = "SELECT * FROM members WHERE eMailAddress='$Email'";
		$result2 = mysqli_query($conn, $sql2);
		$members = mysqli_fetch_all($result2, MYSQLI_ASSOC);
		
		echo "<h3>Welcome - ".$_SESSION['FN']." ".$_SESSION['LN']."<br><br></h3>";
		?>

		<?php foreach ($files as $file): ?>
		<?php endforeach;?>
		<?php foreach ($members as $user): ?>
		

		<table class="UD_UPortal" align="center" width="70%">
		<h3>User Information</h3>
		<p>Below is all the information a user has saved upon registration.</p>
			
			<tr>
				<td>ID</td><td><?php echo $user['ID']; ?></td>
			</tr>
			<tr>
				<td>First Name</td><td><?php echo $user['FirstName']; ?></td>
			</tr>
			<tr>
				<td>Last Name</td><td><?php echo $user['LastName']; ?></td>
			</tr>
				<td>Identification Number</td><td><?php echo $user['IdentificationNumber']; ?></td>
			<tr>
				<td>Proffession</td><td><?php echo $user['Proffesion']; ?></td>
			</tr>
				<td>Contact Number</td><td><?php echo $user['ContactNumber']; ?></td>
			<tr>
				<td>E-Mail Address</td><td><?php echo $user['eMailAddress']; ?></td>
			</tr>
			<tr>
				<td>Physical Address</td><td><?php echo $user['PhysicalAddress']; ?></a></td>
			</tr>
			<?php
					$swabino5=$user['IdentificationNumber'];
					$con = mysqli_connect("localhost","root","","cdb_communitydatabase");
					$sqli = "SELECT * FROM `tblfiles` WHERE `FileName` LIKE '".$swabino5."' ";
					$result = mysqli_query($con, $sqli);
					while ($row = mysqli_fetch_array($result)) {
					echo '<tr>';
					echo '<td>CV Download</td>';
					echo '<td><p style="color:green;"><a class="button" href="'.$row['Location'].'">Download</a></p></td>';
					echo '</tr>';
					}
					mysqli_close($con);
				?>
			
			
		<?php endforeach;
		$_SESSION['QUT'] = $user['IdentificationNumber'];  
		?>
		</table>
		
		<div class="BoundaryMinima">
			<button onclick="DisplayContactInformation()">Edit Contact Information</button>

			<button onclick="DisplayContactUploadCV()">Upload CV</button>

			<a href="Logoff.php"><button style="background-color:red">Log Off</button></a>
		</div>
		<br>
		
		<div id="MPCI" class="FormRegion" id="SectionEditMemberDetails" style="padding-top:30px; width:60%; display:none; ">
			<form method="GET" action="MPUserInfoUpdate.php">
				<h2>Edit Contact Information</h2>
					<p>Update member contact information below</p>
					<label>E-Mail Address</label><br>
					<input name="MPmail" type="text" placeholder="E-Mail Address" value="<?php echo $user['eMailAddress'];?>"></input><br>
					<label>Mobile Number</label><br>
					<input name="MPContact" type="text" placeholder="Contact Number" value="<?php echo $user['ContactNumber'];?>"></input><br>
					<label>Physical Adress</label><br>
					<input name="MPPhys" type="text" placeholder="Address" value="<?php echo $user['PhysicalAddress'];?>"></input><br>
					<button name="NewValue" >Save Entries</button>
			</form>
		<?php
			
		?>
	</div>
		<form enctype="multipart/form-data" method="POST" action="CvEquip.php" id="MPCVUP" class="FormRegion" style="padding-top:30px; width:60%; display:none;">
			<h1> CV Upload</h1>
			<p>Add your CV to the database below</p><br>
			<label>Curriculum Vitae</label><br>
			<input style="height:auto;" type="file" class="form-control" name="file" id="file"></input>
			<button name="CVTUT">Upload</button>
		</form>
		<?php
		
		?>
		
	</center>
</div>
</body>
</html>