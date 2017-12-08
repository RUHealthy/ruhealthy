

//The function below is used to query the available IDs and determine the next sequencial ID. 
function none(nextID) 
{

	var ref = firebase.database().ref('Physician').orderByKey(); 
	
	ref.on("value", function(snapshot) 

			{	window.alert('really');
				var data = []; 
				snapshot.forEach(function(child)
		 			{
						var key = child.key; 
						var childData = child.val(); 
						data.push(key);  
					}); 	
		
				document.write(data);
				var nextID = Math.max.apply(Math, data)+1; 
				window.alert(nextID); 
			});
		
};
