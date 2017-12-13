
var patientList = [,]; 

//modified from https://stackoverflow.com/questions/45835615/firebase-get-immediate-parent-of-a-child-with-specific-value 
function patientSearch(phyID, callback)
{	//window.alert('hi');	
	//Find all patients with the specified patient ID		
		patientList = [,]; 
		//patientList.push(['ID','NAME']); 
		var nameFirst;
		var nameLast; 
		var ref = firebase.database().ref("Patient");
		ref.orderByChild('physician id').equalTo(phyID).once("value", function(snapshot) 
		{	  
		   snapshot.forEach(function(data) 
			 {
			   nameFirst = data.child("first name").val(); //Stores the patient name to the variable nameFirst.
			   nameLast = data.child("last name").val(); //Stores the patient name to the variable nameFirst.
			   patientList.push([data.key, nameFirst +' '+ nameLast]); //Inserts the patient information into the array
			   //window.alert(patientList);
			 }); 
		})
		.then(function(){removeDuplicates(patientList);})//Remove duplicates from the array.
		.then(function(){callback(patientList);});
	
}; 

var patientData = [,];
var patientName = 'Tina Drew'; 
function getPatientInfo(patientID) 
{	window.alert('retreiving patient data'); 
	patientData = [,]
	
	var query = firebase.database().ref("Patient/" + patientID).orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      patientData.push ([key, childData]); 
		       
	    	});    
		window.alert(patientData); 
	}).then(function(printArray){printTable (patientData, patientName)});
	//.then(function(){callback([patientData]);});
};



//modified from https://stackoverflow.com/questions/45835615/firebase-get-immediate-parent-of-a-child-with-specific-value 
function  getPhyData(uid)
{	window.alert('hi');	
	//Find all patients with the specified patient ID		
		//patientList = [,]; 
		//patientList.push(['ID','NAME']); 
		var nameFirst;
		var nameLast; 
		var nameMiddle; 
		var city;
		var gender; 
		var insurance; 
		var mobileNum; 
		var officeNum;
		var state;
		var zip; 
		var email; 
		var ref = firebase.database().ref("Physician");
		ref.orderByChild('id').equalTo(uid).once("value", function(snapshot) 
		{	  
		   snapshot.forEach(function(data) 
			 {
			   nameFirst = data.child("first name").val(); //Stores the patient name to the variable nameFirst.
			   nameLast = data.child("last name").val(); //Stores the patient name to the variable nameFirst.
			   nameMiddle data.child("middle name").val();
			 	city = data.child("city").val();
				gender = data.child("gender").val(); 
				insurance = data.child("insurance").val(); 
				mobileNum = data.child("mobile number").val();
				officeNum = data.child("office number").val();
				state = data.child("state").val();
				zip = data.child("zipcode").val();
				email = data.child("email").val();
			   
			   window.alert(nameFirst + nameLast); //Inserts the patient information into the array
			   //patientList.push([data.key, nameFirst +' '+ nameLast]); //Inserts the patient information into the array
			   //window.alert(patientList);
			 }); 
		})
		.then(function(){callback nameFirst, nameLast, nameMiddle, city, gender, insurance, mobileNum, officeNum, state, zip; email;});
	
		
}; 



function printTable (Array, header)
{
		
		var htmlOut ="<p align = 'center'>" +
		"<img src='RU Healthy Logo.jpg' alt='Smiley face' height = '100' width = '125'>"
			+ "<table align = 'center' border='1|1'>";
		htmlOut += "<tr> <th colspan='2'>" +header + "</th>";
		for(var i in Array)
		{

		    	
			htmlOut += "<tr>";
	     	for(var j in Array[i])
		        htmlOut += "<td>"+ Array[i][j]+"</td>";
		    htmlOut += "</tr>";
		}

		htmlOut += "</table>";
		htmlOut += "<a href='PagemakerPatientSummary.html' align = 'center'>Register Here</a></td>"
		
		document.write(htmlOut);
		return htmlOut;
};
