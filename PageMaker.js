
//Format based on code found here:
//https://console.firebase.google.com/project/ru-healthy-8dc96/database/ru-healthy-8dc96/data/

function printTable (Array, header)
{
		
		var htmlOut ="<p align = 'center'>" +
		"<img src='RU Healthy Logo.jpg' alt='Smiley face' height = '100' width = '125'>"
			+ "<table align = 'center' border='1|1'>";
		htmlOut += "<tr> <th colspan='2'>" +header + "</th>";
		for(var i in Array)
		{

		    	
			htmlOut += "<tr>";
	     	for(var j in Array[i])
		        htmlOut += "<td>"+ Array[i][j]+"</td>";
		    htmlOut += "</tr>";
		}

		htmlOut += "</table>";
		htmlOut += "<a href='PagemakerPatientSummary.html' align = 'center'>Register Here</a></td>"
		
		document.write(htmlOut);
		return htmlOut;
};
