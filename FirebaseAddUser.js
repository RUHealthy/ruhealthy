
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

This Javascript file is used to add a new user to the firebase database.  */

//The function below adds users to the database. 
function addUser(email, userID) 
{
	var firebaseRef = firebase.database().ref(); 
	firebaseRef.child("Physician").child(userID).set(
		 //This sections below adds the information the the firebase database as necessary.
 		//The item to the left of the semicolon is the key or identifier while the part on the 
 		//right is the value. 
 		{
 		 'email':email, 
 		 'first name': '',
 		 'last name': '', 
 		 'id':userID
 		}).then(function (){window.alert("User successfully added");})
 		.then(function(){window.location.href = "ProfileUpdate.html";});
 	
 	//This alert sends a message to the user informing them that their account has been
 	//successfully added to the database. 
 };