
var markE = 75;
var markM = 75;
var markS = 75;

class Student {
    constructor(fname,lname,id, eng, maths, sci) {
      this.fname = fname;
      this.lname = lname;
      this.id = id;
    
      this.markE = eng;
      this.markM = maths;
      this.markS = sci;
      this.calculateaverage = function () {
        return (this.markE + this.markM + this.markS) / 3;
      };
  
    }
  }
   
  const student1 = new Student("Aditya", "Srinivasan", 119009006, 85, 79, 90);
  const student2 = new Student("Random", "User", 119009000, 75, 80, 82);
  
  Student.prototype.display = function () {
    console.log((this.fname +" " + this.lname));
    console.log(this.id);
    console.log("Average:",this.calculateaverage());    
} 

console.log("Student 1:");
student1.display();
console.log("Student 2:");
student2.display();

var avg = (function () {
    return ((markE + markM + markS) / 3) ;
}());

console.log("Global Avg is: ", avg);


