
var mainText = document.getElementByID(mainText);
var submitBtn = document.getElementByID(submitBtn);

function submitClick() 
{
	var firebaseRef = firebase.database().ref(); 
	firebaseRef.child("Name").set("Alice Drew");
	//firebaseRef.parent("userId").set("Alice Drew");
	firebaseRef.child("Name").set("Tina Drew");
	firebaseRef.child("Name12").set("Tyshaun Drew");
	window.alert("This is a test");
}


var tblUsers = document.getElementByID(tbl_users_list);
var databaseRef = firebase.databaseRef().ref('users/');

var userName = document.getElementByID(userName).value;
var userID = document.getElementByID(userID).value;

function addUser() 
{
	alert('Part 1a');
	alert('Part 1b');
	
	const db = firebase.datbase(); 
	const customers = db.ref().child("customers");
	const primaryKey = "customer_one";

	customers.child(primaryKey.set({
		"firstName": "David",
		"lastName": "East",
		"Location": "SF"
	})
		
}


function removeUser () 

{
	alert('Test This'); 
	firebase.database().ref().set('123');
	alert('Test That');
}