
var tablename; 
var patientActivity = [,];
function getPatientActivityInfo(patientID, param) 
{	var tableName = param;
	window.alert('retreiving patient data'); 
	patientActivity  = [,]
	
	var query = firebase.database().ref("Patient/" + patientID+"/Step Count").orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{	window.alert('gathering information');
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      window.alert(childData); 	      
		      patientActivity.push ([key, childData]); 
		      
	       
	    	});    
		//window.alert(patientActivity);})
	.then(function(printArray){printTable (patientActivity, tableName)});
	//.then(function(){callback([patientData]);});
};
