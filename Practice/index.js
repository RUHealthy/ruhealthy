
var mainText = document.getElementByID(mainText);
var submitBtn = document.getElementByID(submitBtn);

function submitClick() 
{
	var firebaseRef = firebase.database().ref(); 
	firebaseRef.child("Name").set("Alice Drew");
	firebaseRef.child("Name").set("Tina Drew");
	firebaseRef.child("Name12").set("Tyshaun Drew");
	window.alert("This is a test");
}
