let start = 10;
let end = 100;
let exclude = 40;

for(start;start<=end;start=start+(+`${+true}${+false}`)){
    if(start == exclude){
        continue;
    }
    console.log(start);
    
}
