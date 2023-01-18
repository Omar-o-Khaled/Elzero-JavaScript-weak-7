/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];


let frist_letter=[];

document.write(`<div>We Have X Admins</div>`)

if(myAdmins.includes("Stop") || myAdmins.includes("stop")){
    document.write(`<div><mark>We Have <strong>${myAdmins.indexOf("Stop")}</strong> Admins</mark></div>`)
}else{
    document.write(`<div><mark>We Have <strong>${myAdmins.length}</strong>Admins</mark></div>`)
}

document.write(`<hr>`)

for(let i=0;i<myAdmins.length;i++){
    if(myAdmins[i].toLocaleLowerCase() === "Stop".toLocaleLowerCase()){
        break;
    }
    document.write(`<div>The Admin For Team ${i+1} Is ${myAdmins[i]}</div>`)
    document.write(`<h3>Team Member : </h3>`)

    for(let k=0;k<myEmployees.length;k++){
        if(myAdmins[i][0] === myEmployees[k][0]){
            frist_letter.push(myEmployees[k]);
        }
    }

    for(let j=0;j<frist_letter.length;j++){
        document.write(`<div>(${j+1}) ${frist_letter[j]}</div>`)
    }
    frist_letter=[];

    document.write(`<hr>`)
}
