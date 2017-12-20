
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

The functions below are used for firebase authentication   */

//The code modified for the code available here:
//https://firebase.google.com/docs/auth/web/password-auth

function register (email, password)
{	var regStatus = 1; 
	//Firebase checks the email credentials and outputs an error if invalid
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  //window.alert( 'Account created'); 
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  return email, password;
	  regStatus = 0;
	  // ...
	 });
	return regStatus;
};


//This funciton is used to log a using into the firebase system
function login(email, password, type)
{	var status = 1;
	//window.alert( 'Login Eval');
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  //Firebase checks the email and password credentials and outputs an error if invalid
			var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		  //Prints out an message if an error occurs
		  window.alert( errorCode +errorMessage);
		  //Sets status to 0 to indicate an error. 
		  status = 0;
		}).then(function(){
		if (status ==1){
			//If there are no errors this redirects to the appropraiate pages according to the function type
			//Redirects to patient homepage during login
			if (type == 'login'){window.location.href = "Home.html";} 
			//Redirection to Profile page during registration
			else if (type == 'reg') {window.location.href = "ProfileUpdate.html";} 
			//If the function is invalid, an alert message displayed
			else {window.alert('invalid function type');}
			};

		});
		
	//window.alert( 'Login Eval2');
	return status;
}

//This function returns login status information 
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
		    // ...
		  status = "User is signed in with user ID " + uid; 
		   } 
		  else 
		  {
			  status = "User is not signed in"; 
			  uid = "000"
			  // User is signed out.
			  // ...
		  }
	    setTimeout(function(){
	    //	window.alert(status);
	    	}, 1000);
	    callback(email, uid);
	});

};

//This function logs the user out of the system
function logout ()
{
	firebase.auth().signOut().then(function() {
		  //window.alert('You are now signed out');
		}, function(error) {
		  window.alert('Sign Out Error', error);
		}).then(function(success){
			//
			//window.location.href = "index.html";
			});
};
