function Student(fname,lname,id) { //student is object which contains student details
  this.fname = fname;
  this.lname = lname;
  this.id = id;

  this.studentavg = (function () {
 
    var markE = 90; 
    var markM = 45;
    var markS = 90;
    var avg;

    var total = function(){
      return markE + markM + markS;
    }
    
    avg = total() / 3;
    
    return avg;
        
  }());
}

Student.prototype.display = function () {
  console.log("Name: " + (this.fname +" " + this.lname));
  console.log("ID: " +this.id);
  console.log("Average: " +this.studentavg);
  
}

function College(name,id) { //college is an object which contains all department details which includes student's. 
  this.name = name;
  this.id = id;
  this.files = [];
}

College.prototype.add = function (file) {
  this.files.push(file);
}

College.prototype.getFileName = function (index) {
  return this.files[index].name;
}

College.prototype.getid = function (index) {
  return this.files[index].id;
}

College.prototype.display = function() {
  console.log(this.name);
  console.log(this.id);
  for (let i = 0, length = this.files.length; i < length; i++) {
      console.log("Name: ", this.getFileName(i),"   ID: ",this.getid(i));
  }
}

depart1 = new College('Department 1',34);
depart2 = new College('Department 2',43);
depart3 = new College('Department 3',56);

student1 = new Student('Aditya','Srinivasan',23);
student2 = new Student('Random','User',24);
student3 = new Student('D','E',25);

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


