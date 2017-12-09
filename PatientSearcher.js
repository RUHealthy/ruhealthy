

var phyID;
var phyName; 
var myID = 123149;
var myName = John Smith;
var patientList = []; 

//This function search through all the patient children links to the current physician
//It outputs the patient IDs to an array
//The code below was model from an example from the site below:
//https://stackoverflow.com/questions/45835615/firebase-get-immediate-parent-of-a-child-with-specific-value 
function patientSearch()
{	 patientList = []; //clears previous values of patient list
	//Find all patients with the specified physican ID by the phsican ID
		var ref = firebase.database().ref("Patient");
		ref.orderByChild(myID).equalTo( 123149).once("value", function(snapshot) 
		{	  
		   snapshot.forEach(function(data) 
			 {
			   patientList.push(data.key); 
			   window.alert(patientList);
			 }); 
		}).then(function(here){patientSearchByName();});
}; 

function patientSearchByName()
{		//Find all patients with the specified physican ID by the phsican ID
		var ref = firebase.database().ref("Patient");
		ref.orderByChild('physician name').equalTo( myName).once("value", function(snapshot) 
		{	  
		   snapshot.forEach(function(data) 
			 {
			   patientList.push(data.key); 
			   //window.alert(patientList);
			 }); 
		}).then(function(here){removeDuplicates(patientList);});
}; 

//The function below removes duplicates from the patient list
//The code was copied and modified from the site below
//http://mikeheavers.com/tutorials/removing_duplicates_in_an_array_using_javascript/ 
function removeDuplicates(Array)
{	
	var uniqueArray = Array.filter(function(elem, pos,arr) 
		{
		  return arr.indexOf(elem) == pos;
		});

	window.alert(uniqueArray); 
}; 
