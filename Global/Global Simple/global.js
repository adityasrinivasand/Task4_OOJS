
var markE = 75;
var markM = 75;
var markS = 75;

function student(first, last, id){
 firstname = first; // Both the 'firstname' and 'first' is private
 lastname = last;
 studid = id;

 displaydetails = function(){
  console.log("Student Id: " + studid);
  console.log("Name: " + firstname + " " + lastname); 
  avg();
 }

 avg = function(){
  console.log(( markE + markM + markS)/3);
 }

 displaydetails();

}

student("Aditya","Srinivasan",119009006);
