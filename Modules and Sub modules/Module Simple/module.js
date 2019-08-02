var student = (function () {
 
  var fname = 'Aditya';
  var lname = 'Srinivasan';
  
  var markE = 90; 
  var markM = 45;
  var markS = 90;
  var avg;
  console.log(fname + " " + lname);
  
  var total = function(){
    return markE + markM + markS;
  }
  
  avg = total() / 3;

  let pass = (function (){   //submodule

    let f =0;
    if( markE <50)f+=1;
    else if(markM <50) f+=1;
    else if(markS <50) f+=1;
    return f;
    
  })();
  
  console.log( "You have failed in "+ pass + " subjects");
  return avg;
  
}());

console.log(student);

