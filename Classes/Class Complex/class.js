class Student {

  constructor(fname, lname, id) {
  
    this.fname = fname;
    this.lname = lname;
    this.id = id;
  }

  addmarks(markE,markM,markS) {
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

const newstudent1 = new Student('Aditya', 'Srinivasan', 119009006);
newstudent1.addmarks(75,75,75);
newstudent1.display();

const newstudent2 = new Student('Random', 'User', 221);
newstudent2.addmarks(95,95,66);
newstudent2.display();