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

This file contains common functions that may be used by several scripts. */


//The function below removes duplicates from the patient list
//The code was copied and modified from the site below
//http://mikeheavers.com/tutorials/removing_duplicates_in_an_array_using_javascript/ 
function removeDuplicates(Array)
{	//var duplicatesArray = [2, 1, 3, 2, 4, 5, 5, 6, 7];
	var uniqueArray = Array.filter(function(elem, pos,arr) 
		{
		  return arr.indexOf(elem) == pos;
		});

	//window.alert(uniqueArray); 
}; 

