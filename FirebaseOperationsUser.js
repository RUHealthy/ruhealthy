//The function below is used to add the user and their information
//to the firebase database. 
function addUser() 
{
	var firebaseRef = firebase.database().ref(); 
	firebaseRef.child(userName.value).set(
		//This sections below added the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{'First Name':nameFirst.value, 
		'Last Name':nameLast.value, 
		'Middle Name':nameMiddle.value, 
		'Office Address':officeAddress.value, 
		'City':officeCity.value, 
		'State':officeState.value, 
		'Zipcode':officeZip.value, 
		'Office Number':numOffice.value, 
		'Mobile Number':numMobile.value, 
		'Insurance':insurance.value,
		'Sex':sex.value, 
		'Username':userName.value, 
		'Password':password.value, 
		'Email':email.value, 
		'Account Type':userType.value 
		});
	//This alert sends a message to the user informing them that their account has been
	//successfully added to the database. 
	window.alert("User added successfully.");
};



