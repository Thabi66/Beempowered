 <?php
include("ConnectionStringIncDB.php");

// Members Table
$sql = " CREATE TABLE IF NOT EXISTS `CDB_CommunityDatabase`.`Members` (
 `ID` INT NOT NULL AUTO_INCREMENT , 
 `FirstName` VARCHAR(100) NOT NULL ,
 `LastName` VARCHAR(100) NOT NULL ,	
 `IdentificationNumber` BIGINT(15) NOT NULL , 
 `Age` DATE ,
 `PhysicalAddress` VARCHAR(100) NOT NULL ,
 `ContactNumber` VARCHAR(15) NOT NULL ,
 `eMailAddress` VARCHAR(100) ,
 `Password` VARCHAR(100) ,
 `Proffesion` VARCHAR(90) ,
 `Availability` VARCHAR(20) ,
 PRIMARY KEY (`ID`)) ENGINE = MyISAM;";

if ($C1->query($sql) === TRUE) {
  #echo "Table CDB created successfully";
} else {
  echo "Error creating table: " . $C1->error;
}

// Administrator Table
$sql2="
  CREATE TABLE IF NOT EXISTS `CDB_CommunityDatabase`.`Administrators` (
 `ID` INT NOT NULL AUTO_INCREMENT , 
 `Username` VARCHAR(5) NOT NULL ,
 `FirstName` VARCHAR(100) NOT NULL ,
 `LastName` VARCHAR(100) NOT NULL ,	
 `Password` VARCHAR(100) ,
 PRIMARY KEY (`ID`)) ENGINE = MyISAM;";
 
 if ($C1->query($sql2) === TRUE) {
  #echo "Table CDB created successfully";
} else {
  echo "Error creating table: " . $C1->error;
}

// CV Table
$sql3="CREATE TABLE IF NOT EXISTS `CDB_CommunityDatabase`.`Files` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(100) NOT NULL,
  `CV` text NOT NULL,
  PRIMARY KEY (`ID`)) ENGINE = MyISAM;";
  
  if ($C1->query($sql3) === TRUE) {
  #echo "Table CDB created successfully";
} else {
  echo "Error creating table: " . $C1->error;
}
 
// CV Table
$sql4="
CREATE TABLE IF NOT EXISTS `cdb_communitydatabase`. `tblfiles`
( `ID` INT(11) NOT NULL AUTO_INCREMENT , 
`FileName` varchar(30) NOT NULL , 
`Location` varchar(90) NOT NULL , 
INDEX (`ID`)) ENGINE = MyISAM; ";
  
  if ($C1->query($sql4) === TRUE) {
  #echo "Table CDB created successfully";
} else {
  echo "Error creating table: " . $C1->error;
} 
 
$C1->close();
?> 