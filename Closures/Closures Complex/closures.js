class student {
  constructor(fname, lname, id, eng, maths, sci) {
    var fname = fname;
    var lname = lname;
    var id = id;
    let markE = eng;
    let markM = maths;
    let markS = sci;

    return function () {
      return ((markE + markM + markS) / 3);
    };


  }
  
}

student.prototype.display = function () {
  console.log((this.fname +" " + this.lname));
  console.log(this.id);
  console.log("Average:",this.calculateaverage());

} 


const student1 = new student("Aditya", "Srinivasan", 119009006, 20, 79, 90);
const student2 = new student("Random", "User", 119009000, 75, 80, 82);


console.log("Average of Student 1 : " + student1());
student1.display();


