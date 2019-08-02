function Student(fname,lname,id,eng,maths,sci) { //student is object which contains student details
  this.fname = fname;
  this.lname = lname;
  this.id = id;

  this.markE = eng;
  this.markM = maths;
  this.markS = sci;

  this.studentavg = (function () {
 
    var avg;

    var total = function(){
      return this.markE + this.markM + this.markS;
    }
    
    avg = total() / 3;
    
    return avg;
        
  }());


}

Student.prototype.display = function () {
  console.log((this.fname +" " + this.lname));
  console.log(this.id);
  console.log("Average:" +this.studentavg);
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
depart3 = new College('Department 3','ECE',51);

const student1 = new Student("Aditya", "Srinivasan", 119009006, 85, 79, 90);
const student2 = new Student("Random", "User", 119009000, 75, 80, 82);
const student3 = new Student("Random1", "User1", 119009000, 75, 80, 82);

student1.display();
student2.display();
student3.display();

depart1.add(student1); //adding student 1 to the 1st department
depart1.add(student2);

depart2.add(student3);

depart3.add(student1); // adding three students to the 3rd department
depart3.add(student2);
depart3.add(student3);

console.log("");
console.log("College Details:")
depart1.display();
depart2.display();
depart3.display();


