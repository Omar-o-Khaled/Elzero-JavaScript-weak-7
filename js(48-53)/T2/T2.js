let start = 10;
let end = 0;
let stop = 3;

for(start;start>=end;start--){

    if(`${start}`.length==true){
        console.log(`0${start}`);
    }else{
        console.log(`${start}`);
    }

    if(start == stop){
        break;
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03