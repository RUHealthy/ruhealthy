//var mainText = document.getElementByID(mainText);
//var submitBtn = document.getElementByID(submitBtn);


var tblUsers = document.getElementByID(tbl_users_list);
var databaseRef = firebase.databaseRef().ref('users/');

var userName = document.getElementByID(userName).value;
var userID = document.getElementByID(userID).value;


function addUser() 
{

	alert('The user was created sucessully');
	var uid = firebase.databaseRef().ref().child('users/').push().key;
	var data = {
			userId: userId, 
			userName: userName
			
	}
	
	var updates = {};
	updates ['/users/' + userId] = data;
	firebase.database().ref().update(updates);
	
	alert('The user was created sucessully');
	reload_page();
}

function updateUser() 
{
	var data = {
			userId: userId, 
			userName: userName
			
	}
	
	var updates = {};
	updates ['/users/' + userId] = data;
	firebase.database().ref().update(updates);
	
	alert('The user was updated sucessfully');
	reload_page();
}

function delete_user()
{
	firebase.database().ref().child('/users/' + uid).remove;
	
	alert('The user was removed sucessfully');
	reload_page();
}

function reload_page() 
{
	window.locaition.reload();
}
