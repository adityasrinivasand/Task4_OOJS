class Student {
  constructor(fname,lname,id, eng, maths, sci) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
  
    this.markE = eng;
    this.markM = maths;
    this.markS = sci;

    this.calculateaverage = function () {
      var avg=(this.markE + this.markM + this.markS) / 3;
      return avg;
    };

    this.pass = function () {
     
      var f=0;
      if(this.markE < 50){f+=1; }
      else if(this.markM < 50)f+=1; 
      else if(this.markS < 50)f+=1; 
      console.log("No of subject Failed is: " + f);
    }
  }
}

const student1 = new Student("Aditya", "Srinivasan", 119009006, 20, 79, 90);
const student2 = new Student("Random", "User", 119009000, 75, 80, 82);

Student.prototype.display = function () {
  console.log((this.fname +" " + this.lname));
  console.log(this.id);
  console.log("Average:",this.calculateaverage());
  this.pass();
} 

console.log("Student 1");
student1.display();
console.log("");
console.log("Student 2");
student2.display();
       
