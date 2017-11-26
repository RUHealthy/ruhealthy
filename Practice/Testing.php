<?php 
#Dim statement to declare variables
Dim sConnection, objConn , objRS
 
#set database connection variables
username = "sql9204474"
password = "DMvLWcBYSb"
database = "sql9204474"
host = "www.sql9.freesqldatabase.com"	
 
#assign a value to the sConnection variable
sConnection = "DRIVER={MySQL ODBC 3.51 Driver}; SERVER="&host&"; DATABASE="&database&";
 UID="&username&";PASSWORD="&password&"; OPTION=3"
 
#create the ADODB object
Set objConn = Server.CreateObject("ADODB.Connection")
 
#open the connection
objConn.Open(sConnection)
 
#excecute mysql query
Set objRS = objConn.Execute("show tables")
 
#loop through the mysql result and display its output
do until objRS.EOF
  for each x in objRS.Fields
    Response.Write(x.value & "<br />")
  next
  objRS.MoveNext

loop
 
#close and unset variables
objRS.Close
Set objRS = Nothing
objConn.Close
Set objConn = Nothing

?>