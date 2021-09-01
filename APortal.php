<!--Inclusion of scripts-->
<?php
include ("DatabaseConnect.php");
include ("CDBTables.php");
include ("ConnectionStringIncDB.php");
include ("Roids.php");

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

    <center>
	<h1>CDB - Community Database</h1>
	<h2>CDB Admin Page</h2>
	
	<div style=" padding:40px 0px 40px 0px;">
		<!-- Trigger/Open The Modal -->
		<button onclick="MemberAvailability()">Edit Member Availability</button>
		<button onclick="AddMember()">Add Member Details</button>
		<button onclick="EditMember()" style="background-color:yellow; color:black;">Edit Member Details</button>
		<button onclick="RemoveMember()" style="background-color:red; color:black;">Remove Member</button>
	</div>
	
	<div class="FormRegion" id="SectionMemberAvailabilityAddition" style="display:none; width:60%;">
		<form method="GET" action="">
		<h2>Update Member Availability</h2>
		<p>Change the availability of a member</p>
			<label>Index</label><br>
			<input type="int" name="indV" placeholder=""></input><br>
			<label>Availability</label><br>
			<select name="AV">
			<option value="Available">Available</option>
			<option value="Unavailable">Unavailable</option>
			</select><br>
			<button onClick="window.location.reload();">save</button>
		</form>
	</div>
	
	<div class="FormRegion" id="SectionEditMemberDetails" style="display:none; width:70%;">
		<form method="GET" action="">
			<h2>Edit Member Details</h2>
			<p>Search up member by ID</p>
			<label>Member ID</label><br>
			<input name="DBSearchValue" type="text" placeholder="Member ID"></input><br>
			<button name="Search" >Search</button><br><br>

		<?php
			$search_value="1";
			$search_value= isset($_GET["DBSearchValue"]) ? $_GET["DBSearchValue"] : '';
			$C1=new mysqli($servername,$username,$password,$database);
			if($C1->connect_error){
				echo 'Connection Faild: '.$C1->connect_error;
				}else{
					$sql="select * from members WHERE ID like 
					'%$search_value%'";

					$result=$C1->query($sql);
		?>
		
		<?php
			while($row = mysqli_fetch_array($result)){
			echo '<b>User Found: </b>'.$row["FirstName"].' '.$row["LastName"];
			
			$MID = $row["ID"];
			$EMSet = $row["eMailAddress"];
			$CNSet = $row["ContactNumber"];
			$PASet = $row["PhysicalAddress"];
			$PRSet = $row["Proffesion"];
			
			}      

			$_SESSION["EMS24"] = $MID;
		}?>
		</form>
		
	<form method="GET" action="APMemberInfoUpdate.php">
		<p>Update member details below</p>
		<input name="APEM" type="text" placeholder="E-Mail Address" value="<?php echo $EMSet?>"></input>
		<input name="APCN" type="text" placeholder="Contact Number" value="<?php echo $CNSet?>"></input>
		<input name="APADD" type="text" placeholder="Address" value="<?php echo $PASet?>"></input><br>
		<button name="NewValue" >Save Entries</button>
	</form>
	</div>
	
	<div class="FormRegion" id="SectionRemoveMember" style="display:none; width:60%;">
	<form method="GET" action="MemberRemoval.php">
		<h2>Member Index Removal</h2>
		<p>Enter the index of the member you wish to remove from the database</p>
		<label>User Index</label><br>
		<input type="text" placeholder="Index" name="IndexToRemove"></input><br>
		<button onClick="window.location.reload();" style="background-color:red; color:black;">Remove</button>
	</form>
	</div>

	<div class="FormRegion" id="SectionMemberAddition" style="display:none">
		<form action="Roids.php" method="POST">
			<h2>Add Member Details</h2>
			<p>Add members to the database</p>
			
		<div class="row">
			<div class="col">
				<label><b>First Name*</b></label><br>
				<input type="text" placeholder="First Name" name="firstname"><br>
				<span class="error"> <?php echo $FnErr;?></span>
			</div>
			<div class="col">
				<label><b>Last Name*</b></label><br>
				<input type="text" placeholder="Last Name" name="lastname"><br>
				<span class="error"> <?php echo $LnErr;?></span>
			</div>
		</div>
			
		<div class="row">
		<div class="col">
			<label><b>ID Number*</b></label><br>
			<input type="int" placeholder="Identification Number" name="idnumber"><br>
			<span class="error"> <?php echo $IdnoErr;?></span>
		</div>
		<div class="col">
			<label><b>Age*</b></label><br>
			<input type="int" placeholder="Age" name="age"><br>
			<span class="error"> <?php echo $AgErr;?></span>
		</div>
		</div>
			
		<div class="row">
		<div class="col">
			<label><b>Physical Address*</b></label><br>
			<input type="text" placeholder="Physical Address" name="physicaladdress"><br>
			<span class="error"> <?php echo $PaErr;?></span>
		</div>
		<div class="col">
			<label><b>Contact Number*</b></label><br>
			<input type="int" placeholder="Mobile Number" name="contactnumber"><br>
			<span class="error"> <?php echo $CnErr;?></span>
		</div>
		</div>		
		<div class="row">
		<div class="col">
			<label><b>Email*</b></label><br>
			<input type="email" placeholder="Email Address" name="emailaddress"><br>
			<span class="error"> <?php echo $EaErr;?></span>
		</div>
		<div class="col">
			<label><b>Proffession*</b></label><br>
			<select name="proffession">
			<option value="Construction">Construction</option>
			<option value="Catering">Catering</option>
			</select><br>
		</div>
		</div>
			<label><b>Curriculum Vitae*<br>(Size Limit:12MB)</b></label><br>
			<input type="file" class="form-control" name="CV" /><br>		
		<div class="row">
		<div class="col">
			<label><b>Password*</b></label><br>
			<input type="text" placeholder="Enter Password" name="password"><br>
			<span class="error"> <?php echo $PwErr;?></span>
		</div>
		<div class="col">
			<label><b>Confirm Password*</b></label><br>
			<input type="text" placeholder="Re-Enter Password" name="password2"><br>
		</div>
		</div>
			<button type="submit" name="submit">Save</button><br>
		</form> 
	</div>
	
	
	<div class="OverflowingTable" style="height:300px;overflow:auto;" enctype="multipart/form-data">
		<table class="TableArcher" border="1" align="center" width="70%%" padding-top: 20px;  enctype="multipart/form-data">
		<tr>
		<td>Index</td>
		<td>First Name</td>
		<td>Last Name</td>
		<td>Contact Number</td>
		<td>E-Mail Address</td>
		<td>Age</td>
		<td>Physical Address</td>
		<td>Proffesion</td>
		<td>Availability</td>
		<td>PDF Downloads</td>
		</tr>
  

	<?php foreach ($files as $file): ?>
	<?php endforeach;?>
	<?php foreach ($members as $user): ?>
	
    <tr>
	  <td><?php echo $user['ID']; ?></td>
      <td><?php echo $user['FirstName']; ?></td>
      <td><?php echo $user['LastName']; ?></td>
	  <td><?php echo $user['ContactNumber']; ?></td>
	  <td><?php echo $user['eMailAddress']; ?></td>
	  <td><?php echo $user['Age']; ?></td>
	  <td><?php echo $user['PhysicalAddress']; ?></td>
	  <td><?php echo $user['Proffesion']; ?></td>
	  <td><?php echo $user['Availability']; ?></td>
      <?php			
					$swabino = $user['IdentificationNumber'];
					$con = mysqli_connect("localhost","root","","cdb_communitydatabase");
					$sqli = "SELECT * FROM `tblfiles` WHERE `FileName` LIKE '".$swabino."' ";
					$result = mysqli_query($con, $sqli);
					while ($row = mysqli_fetch_array($result)) {
					echo '<td><p style="color:green;"><a class="button" href="'.$row['Location'].'">Download</a></p></td>';
					}
					mysqli_close($con);
				?>
	</tr>
  <?php endforeach;?>
		</table>
	</div>
	<a href="Logoff.php"><button style="background-color:red; float:right;">Log Off</button></a>
	</center>

</body>
</html>