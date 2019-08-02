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
       
function College(fname,lname,id) { //college is an object which contains all department details which includes student's. 
  this.fname = fname;
  this.lname = lname;
  this.id = id;
  this.files = [];
}

College.prototype.add = function (file) {
  this.files.push(file);
}

College.prototype.getFileName = function (index) {
  return (this.files[index].fname + " " + this.files[index].lname) ;
}

College.prototype.getid = function (index) {
  return this.files[index].id;
}

College.prototype.display = function() {
  console.log((this.fname +" " + this.lname));
  console.log(this.id);
  for (let i = 0, length = this.files.length; i < length; i++) {
      console.log("Name: ", this.getFileName(i),"   ID: ",this.getid(i));
  }
}

depart1 = new College('Department 1','Mech',34);
depart2 = new College('Department 2','CSE',50);


depart1.add(student1); //adding student 1 to the 1st department
depart2.add(student2);

console.log("Student 1:");
student1.display();
console.log("Student 2:");
student2.display();

console.log("");
console.log("College Details:")
depart1.display();
depart2.display();