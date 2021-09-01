//Admin Page JS implementation
function MemberAvailability() {
  var x = document.getElementById("SectionMemberAvailabilityAddition");
  var y = document.getElementById("SectionRemoveMember");
  var z = document.getElementById("SectionMemberAddition");
  var a = document.getElementById("SectionEditMemberDetails");
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	a.style.display = "none";
  } else {
	a.style.display = "none";
    x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
  }
}

function RemoveMember() {
  var x = document.getElementById("SectionMemberAvailabilityAddition");
  var y = document.getElementById("SectionRemoveMember");
  var z = document.getElementById("SectionMemberAddition");
    var a = document.getElementById("SectionEditMemberDetails");
  if (y.style.display === "none") {
    y.style.display = "block";
	x.style.display = "none";
	z.style.display = "none";
	a.style.display = "none";
	
  } else {
    y.style.display = "none";
	x.style.display = "none";
	z.style.display = "none";
	a.style.display = "none";
  }
}

function AddMember() {
  var x = document.getElementById("SectionMemberAvailabilityAddition");
  var y = document.getElementById("SectionRemoveMember");
  var z = document.getElementById("SectionMemberAddition");
    var a = document.getElementById("SectionEditMemberDetails");
  if (z.style.display === "none") {
    z.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
	a.style.display = "none";
  } else {
    z.style.display = "none";
	x.style.display = "none";
	y.style.display = "none";
	a.style.display = "none";
  }
}

function EditMember() {
  var x = document.getElementById("SectionMemberAvailabilityAddition");
  var y = document.getElementById("SectionRemoveMember");
  var z = document.getElementById("SectionMemberAddition");
    var a = document.getElementById("SectionEditMemberDetails");
  if (a.style.display === "none") {
    a.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
  } else {
    a.style.display = "none";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
  }
}

//Members Page JS implementation

function DisplayContactInformation(){
	var w = document.getElementById("MPCI");
	var q = document.getElementById("MPCVUP");
	
	if(w.style.display === "none"){
		w.style.display = "block";
		q.style.display = "none";
	}else{
		w.style.display = "none";
		q.style.display = "none";
	}
}

function DisplayContactUploadCV(){
	var w = document.getElementById("MPCI");
	var q = document.getElementById("MPCVUP");
	
	if(q.style.display === "none"){
		q.style.display = "block";
		w.style.display = "none";
	}else{
		q.style.display = "none";
		w.style.display = "none";
	}
}