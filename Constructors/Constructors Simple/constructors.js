function Student(first, last, id){
  this.fName = first;
  this.lName = last;
  this.id = id;

  
	this.displayDetails = function(){
    console.log("Student Id: " + this.id );
    console.log("Name: " + this.fName + " " + this.lName );

	}
}
    
var student1 = new Student("Aditya", "Srinivasan", 119009006);
var student2 = new Student("Random", "User", 119009000);
      
student1.displayDetails();
student2.displayDetails();


       
