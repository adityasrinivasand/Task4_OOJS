class Student {
  constructor(first, last, id, eng, maths, sci) {
    var firstname = first;
    var lastname = last;
    var studid = id;
    console.log(firstname);
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
    
var student1 = new Student("Aditya", "Srinivasan", 119009006, 85, 79, 90);
var student2 = new Student("Random", "User", 119009000, 75, 80, 82);
      
student1.displaydetails();
student2.displaydetails();
console.log(student1.avg); // variable avg is encapsulated to displaydetails and not to the global, hence it can be accessed.
       
