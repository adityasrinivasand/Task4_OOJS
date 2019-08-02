class Student {

  constructor(first, last, id, eng, maths, sci) {
    this.fName = first;
    this.lName = last;
    this.id = id;
    this.markE = eng;
    this.markM = maths;
    this.markS = sci;

    this.calculateAverage = function () {
      return (this.markE + this.markM + this.markS) / 3;
    };

    this.displaydetails = function () {
      console.log("Student Id: " + this.id);
      console.log("Name: " + this.fName + " " + this.lName);
      var avg = this.calculateAverage();
      console.log("Average Marks: " + avg);
    };

  }
}
    
var student1 = new Student("Aditya", "Srinivasan", 119009006, 85, 79, 90);
var student2 = new Student("Random", "User", 119009000, 75, 80, 82);

Student.prototype.college ='SASTRA';//prototype for student class
Student.prototype.hostel = true;//prototype for student class
      
student1.displaydetails();
student2.displaydetails();

console.log("College: " + student1.college);  //here inheritance is carried out by inheriting the value from the prototype class to its own. 
console.log("Hostel: " + student2.hostel);  //here inheritance is carried out by inheriting the value from the prototype class to its own. 
       


       
