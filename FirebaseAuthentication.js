//The funcitons below are used for firebase authentication 
//The code modified for the code available here:
//https://firebase.google.com/docs/auth/web/password-auth

function register (email, password, callback)
{
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  window.alert( 'Account created'); 
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  callback (email, password);
	  // ...
	 });
 
};

function login (email, password)
{	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) 
	{
	 // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  callback(email, password);
	  // ...
	});

window.alert( 'Logining in'); 
};

var userID; 
var status;
function GetLoginStatus(callback)
{	var uid;
	var email;
	firebase.auth().onAuthStateChanged(function(user) 
	{	
		 if (user) 
		  {
		    // User is signed in.
		    var displayName = user.displayName;
		    email = user.email;
		    var emailVerified = user.emailVerified;
		    var photoURL = user.photoURL;
		    var isAnonymous = user.isAnonymous;
		    uid = user.uid;
		    var providerData = user.providerData;
		    userID = uid; 
		    // ...
		  status = "User is signed in with user ID " + uid; 
		   } 
		  else 
		  {
			  status = "User is not signed in"; 
			  // User is signed out.
			  // ...
		  }
	    setTimeout(function()
	    	{
	    	window.alert(status);
	    	callback(email,uid);
	    	}, 3000);
	});
};

function logout ()
{
	firebase.auth().signOut().then(function() {
		  window.alert('You are now signed out');
		}, function(error) {
		  window.alert('Sign Out Error', error);
		});
};
