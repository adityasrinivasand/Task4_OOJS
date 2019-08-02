function myavg(eng,maths,sci) {
  let markE = eng; 
  let markM = maths;
  let markS = sci;

  return function () {    
    return ((markE + markM + markS) / 3);
  };
}

let myc = myavg(90,90,90);

console.log("Average: " + myc());


