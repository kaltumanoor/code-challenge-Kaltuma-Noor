
let marks = parseInt(prompt("Write the marks"))

if(marks > 79){
    console.log("A")
}

else if(marks >=60 && marks <=79){
    console.log("B");
}

else if(marks >= 49 && marks <= 59){
    console.log("C")
}

else if(marks >= 40 && marks < 49 ){
    console.log("D");
}

else {
    console.log("E")
}


let speed = parseInt(prompt("inticate the speed"))

    let limit = 70;

    if(speed <= limit){
      console.log("Ok");
    }else{
      let demeritPoints = (speed-limit)/5;
      if(demeritPoints <= 12){
        console.log(demeritPoints);
      }else{
        console.log("License Suspended!")
      }
    }
    

    const prompt = require("prompt-sync")();


function calcsalary(personalrelief, netsalary,totaldeductions, contribitionbenefit,nhifdeductions, nssfdeductions, grosssalary, taxableincome){
    let paye;
    personalrelief = +2400;
    grosssalary = +prompt("enter your salary amount:")
    contribitionbenefit = +prompt("contribution benefit:")
    nhifdeductions= +prompt("enter nhifdeduction:")
    nssfdeductions= +prompt("enter nssfdeduction:") 
    
    totaldeductions = (nhifdeductions + nssfdeductions + personalrelief + contribitionbenefit);
    taxableincome = grosssalary - totaldeductions;
    
    switch(true){
        case (taxableincome<24000):
            paye = taxableincome * 0.01;
            break;
        case (taxableincome>=24001 && taxableincome<= 32333):
            paye = taxableincome * 0.25;
            break;
        case (taxableincome>32333):
            paye = taxableincome * 0.30;
            break; 
    }
    
    netsalary = (parseint (taxableincome - paye));
    console.log(`your netsalary is ksh: ${netsalary}`)
}
calcsalary()
    
    
