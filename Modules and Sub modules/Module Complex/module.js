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
  console.log("Name:" + (this.fname +" " + this.lname));
  console.log("ID:" +this.id);
  console.log("Average:" +this.studentavg);
  console.log("Average:" + avg);

}  

student1 = new Student('Aditya','Srinivasan',23);
student2 = new Student('Random','User',24);
student3 = new Student('D','E',25);

console.log("Student 1:");
student1.display();
console.log("");
console.log("Student 2:");
student2.display();
console.log("");
console.log("Student 3:");
student3.display();