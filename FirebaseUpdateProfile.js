
// This Javascript file is used to add an new user to the firebase database. 
//var uid = '1aaSZeImnZb8OhhIgKZZiyIZlBy2'; //Initializes nextID to 0. 

//Top level function used to call and sequence the rest of the functions. 
function addUser() 
{
	getID(); //Calls the getID function to get the next available ID. 
};


//The function below adds users to the database. 
function addPerson(uid) 
{
	var firebaseRef = firebase.database().ref(); 
	
	//This adds a new patient to the database. 
	if (userType.value === "Patient")
	{
		firebaseRef.child("Patient").child(uid).update(
				
		//This sections below adds the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{
		 'first name':nameFirst.value, 
		 'last name':nameLast.value, 
		 'middle name':nameMiddle.value, 
		 'email':email.value, 
		 'age':0,
		 'gender':gender.value,
		 'height':0,
		 'heartrate':0,
		 'target':0,
		 'weight':0
		 //'id':nextID
		});
	}
	
	//This adds a other usertypes to the database. 
	else 
	{
		firebaseRef.child("Physician").child(uid).set(
				
		//This sections below added the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{//'first name':nameFirst.value, 
		 //'last name':nameLast.value, 
		 'middle name':nameMiddle.value, 
		 'office address':officeAddress.value, 
		 'city':officeCity.value, 
		 'state':officeState.value, 
		 'zipcode':officeZip.value, 
		 'office number':numOffice.value, 
		 'mobile number':numMobile.value, 
		 'insurance':insurance.value,
		 'gender':gender.value, 
		 //'username':userName.value, 
		 'password':password.value, 
		 //'email':email.value, 
		 //'account Type':userType.value 
		 //'ID':nextID
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

