
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

The javascript file is used to initialize and configure for the firebase database  */


//-------------------------------------------------------------------------------
//The code below was provided by firebase and is used to initialize the firebase features

src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbFHaYv1U-w6DphuNtiL_YyxvP3SLweME",
    authDomain: "ruhealthy-69349.firebaseapp.com",
    databaseURL: "https://ruhealthy-69349.firebaseio.com",
    projectId: "ruhealthy-69349",
    storageBucket: "ruhealthy-69349.appspot.com",
    messagingSenderId: "387397422876"
  };
  firebase.initializeApp(config);