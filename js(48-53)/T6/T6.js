let start = 0;
let swappedName = "elZerO";

let sn=[];

for(start;start<swappedName.length;start++){
    if(swappedName[start] == swappedName[start].toLocaleLowerCase()){
        sn.push(swappedName[start].toLocaleUpperCase());
    }else{
        sn.push(swappedName[start].toLocaleLowerCase());
    }
}
swappedName=sn;
console.log(swappedName.join(""));

// Output
// "ELzERo"

/*  second way  */
/*

for(start;start<swappedName.length;start++){
    if(swappedName[start] == swappedName[start].toLocaleLowerCase()){
        sn.push(swappedName[start].toLocaleUpperCase());
    }else{
        sn.push(swappedName[start].toLocaleLowerCase());
    }
    if(start==swappedName.length-true){
        console.log(sn.join(""))
    }
}

*/