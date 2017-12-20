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

This script contains functions for attaining and returning patient data information */ 

var patientList = [,]; 

//modified from https://stackoverflow.com/questions/45835615/firebase-get-immediate-parent-of-a-child-with-specific-value 
//This function searches through the patient list in firebase and outputs an array of patients that have 
//selected this physician as a doctor
function patientSearch(phyID, callback)
{	//window.alert('hi');	
		patientList = [,]; 
		//patientList.push(['ID','NAME']); 
		var nameFirst;
		var nameLast; 
		var ref = firebase.database().ref("Patient");
		ref.orderByChild('physician id').equalTo(phyID).once("value", function(snapshot) 
		{	  
		   snapshot.forEach(function(data) 
			 {
			   nameFirst = data.child("First Name").val(); //Stores the patient name to the variable nameFirst.
			   nameLast = data.child("Last Name").val(); //Stores the patient name to the variable nameFirst.
			   patientList.push([data.key, nameFirst +' '+ nameLast]); //Inserts the patient information into the array
			   //window.alert(patientList);
			 }); 
		})
		//.then(function(){removeDuplicates(patientList);})//Remove duplicates from the array.
		.then(function(){callback(patientList);}); //Returns the patient list to the function that is called. 
	
}; 


//This function returns the patient data for the patient specified by the patientID.
var patientData = [,];
var patientName = ' ' 
function getPatientInfo(patientID) 
{	//window.alert('retreiving patient data'); 
	patientData = [,]
	
	var query = firebase.database().ref("Patient/" + patientID).orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      	      
		      if (typeof childData === 'object')
		      {
		    	  
		      }
	
		      else
		      {		   
		    	  patientData.push ([key, childData]);
		      }
	      
	       
	    	});    
		//window.alert(patientData); 
	}).then(function(printArray){printTable (patientData, patientName)});
	//.then(function(){callback([patientData]);});
};


//modified from https://stackoverflow.com/questions/45835615/firebase-get-immediate-parent-of-a-child-with-specific-value 
//This function outputs the patient data as a table on a redirected page. 
function printTable (Array, header)
{
		
		var htmlOut ="<p align = 'center'>" +
		"<img src='profile1.jpg' alt='Smiley face' height = '100' width = '125'>"
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
		htmlOut += "<br><a href='Patient Information.html' align = 'center'>Return to Patient Information</a></td>"
		
		document.write(htmlOut);
		return htmlOut;
};
