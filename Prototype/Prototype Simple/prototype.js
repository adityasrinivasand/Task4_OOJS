class Student {
  constructor(first, last, id, eng, maths, sci) {
    var firstname = first; // Both the 'firstname' and 'first' is private
    var lastname = last;
    var studid = id;
    this.fname = function (first) { firstname = first; };
    this.lname = function (last) { lastname = last; };
    this.id = function (id) { studid = id; };
    this.markE = eng;
    this.markM = maths;
    this.markS = sci;
    this.calculateaverage = function () {
      return (this.markE + this.markM + this.markS) / 3;
    };
    this.displaydetails = function () {
      console.log("Student Id: " + studid);
      console.log("Name: " + firstname + " " + lastname);
      var avg = this.calculateaverage();
      console.log("Average Marks: " + avg);
    };
  }
}
 
const student1 = new Student("Aditya", "Srinivasan", 119009006, 85, 79, 90);
const student2 = new Student("Random", "User", 119009000, 75, 80, 82);



Student.prototype.college ='SASTRA';//prototype for student class
Student.prototype.hostel = true;//prototype for student class


      
student1.displaydetails();
student2.displaydetails();

console.log("College: " + student1.college);  //here inheritance is carried out by inheriting the value from the prototype class to its own. 
console.log("Hostel: " + student2.hostel);  //here inheritance is carried out by inheriting the value from the prototype class to its own. 
       
