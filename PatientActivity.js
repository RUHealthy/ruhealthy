/* The code is based on a class project at Rutgers University. 

Project Title: RU Healthy?
Class:  Software Engineering I   
Course No: ECE567
Professor: Ivan Marsic
Semester: Fall 2017
Website code developer: Tina Drew
Written by Tina Drew
Debugged by Tina Drew
Tested by Tina Drew

Group Participants: Aymen F Al-Saadi, Tahiya Chowdhury, Tina L Drew, 
George Koubbe, Himabindu Paruchuri and Ramya Tadepalli 

This script contains function for attaining and returning patient activity information */



var tablename; 
var patientActivity = [,];

//This function outputs the information listed in firebase for the specified patient and activity
function getPatientActivityInfo(patientID, param) 
{	var tableName = param;
	//window.alert('retreiving patient data'); 
	patientActivity  = [,]
	
	var query = firebase.database().ref("Patient/" + patientID+ "/" + param).orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      //window.alert(childData); 	      
		      patientActivity.push ([key, childData]); 
		             
	    	});    
		//window.alert(patientData); 
	}).then(function(printArray){printTable (patientActivity, tableName)});
	//.then(function(){callback([patientData]);});
};

//This function outputs the patient activity as a table on a redirected page. 
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
		htmlOut += "<a href='Patient Information.html' align = 'center'>Return to Patient Information</a></td>"
		
		document.write(htmlOut);
		return htmlOut;
};
