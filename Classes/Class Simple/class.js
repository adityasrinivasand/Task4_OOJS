class Student {

  constructor(fname, lname, id) {
  
    this.fname = fname;
    this.lname = lname;
    this.id = id;
  }

  displaydetails(){
    console.log("Student Id: " + this.id );
    console.log("Name: " + this.fname + " " + this.lname);
  }

}

const newstudent1 = new Student('Aditya', 'Srinivasan', 119009006);
newstudent1.displaydetails();

const newstudent2 = new Student('Random', 'User', 221);
newstudent2.displaydetails();