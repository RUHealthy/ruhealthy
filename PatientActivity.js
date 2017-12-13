
var tablename; 
var patientActvity = [,];
function getPatientActivityInfo(patientID, param) 
{	var tableName = param;
	window.alert('retreiving patient data'); 
	patientRecovery  = [,]
	
	var query = firebase.database().ref("Patient/" + patientID+"/"+param).orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      	      
		      patientActicity.push ([key, childData]); 
		      
	       
	    	});    
		//window.alert(patientData); 
	}).then(function(printArray){printTable (patientData, tableName)});
	//.then(function(){callback([patientData]);});
};
