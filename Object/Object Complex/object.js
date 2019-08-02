class Student {

  constructor(fname, lname, id,markE,markM,markS) {
  
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.markE = markE;
    this.markM = markM;
    this.markS = markS;
  }

  calculateaverage() {
    return (this.markE + this.markM + this.markS)/3;
  }

}

Student.prototype.display = function () {
  console.log((this.fname +" " + this.lname));
  console.log(this.id);
  
  var avg = this.calculateaverage();
  console.log("Average Marks: " + avg);
} 

const newstudent1 = new Student('Aditya', 'Srinivasan', 119009006,75,75,75);
newstudent1.display();

const newstudent2 = new Student('Random', 'User', 221,95,95,66);
newstudent2.display();