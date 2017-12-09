
// This Javascript file is used to add an new user to the firebase database. 
var nextID = 0; //Initializes nextID to 0. 

//Top level function used to call and sequence the rest of the functions. 
function addUser() 
{
	getID(); //Calls the getID function to get the next available ID. 
};

//The function below performs a query on the database to get all the ID for the parent.
//It then return the next ID number. 
function getID() 
{
	var ref = firebase.database().ref(userType.value).orderByKey(); 
	var data = []; 
	var data1 = [];
 	ref.once("value", function(snapshot) 

			{		
				snapshot.forEach(function(child)
		 			{
						var key = child.key; 
						var childData = child.val(); 
						data1.push(key); 	
						data.push(key); 
					});
			//This code below should remove any non numerical values from the data array
			}).then(function (getNumber)
					{
						for (i=0; i<data1.length; i++)
						{
							if (typeof (data1[i]) === "number")
							{
							window.alert(i); 
							//data.push(data1[i]); 
							}
							window.alert(data1);
						}
					})
			//Sets the ID to 1 if not patients of physicians are in the database
			.then(function(ID)
				{	window.alert(data); 
					if (data.length < 1)
					{
						nextID = 1; 
					}
						
					else 
					{
						nextID = Math.max.apply(Math, data)+1; 
					}
				}).then(function(addUser){addPerson();});
};

//The function below adds users to the database. 
function addPerson() 
{
	var firebaseRef = firebase.database().ref(); 
	
	//This adds a new patient to the database. 
	if (userType.value === "Patient")
	{
		firebaseRef.child("Patient").child(nextID).set(
				
		//This sections below adds the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{
		 'name-first':nameFirst.value, 
		 'name-last':nameLast.value, 
		 'name-middle':nameMiddle.value, 
		 'email':email.value, 
		 'age':0,
		 'gender':gender.value,
		 'height':0,
		 'heartrate':0,
		 'target':0,
		 'weight':0,
		 'id':nextID
		});
	}
	
	//This adds a other usertypes to the database. 
	else 
	{
		firebaseRef.child("Physician").child(nextID).set(
				
		//This sections below added the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{'Name-First':nameFirst.value, 
		 'Name-Last':nameLast.value, 
		 'Name-Middle':nameMiddle.value, 
		 'Name':nameFirst.value +' '+ nameMiddle.value + ' '+ nameLast.value,
		 'Office Address':officeAddress.value, 
		 'City':officeCity.value, 
		 'State':officeState.value, 
		 'Zipcode':officeZip.value, 
		 'Office Number':numOffice.value, 
		 'Mobile Number':numMobile.value, 
		 'Insurance':insurance.value,
		 'Gender':gender.value, 
		 'Username':userName.value, 
		 'Password':password.value, 
		 'Email':email.value, 
		 'Account Type':userType.value, 
		 'ID':nextID
		});
	}
	
	
	//This alert sends a message to the user informing them that their account has been
	//successfully added to the database. 
	window.alert("User successfully added");
};

function testWrite ()
{
var testthis = 13;
return testthis;
}

