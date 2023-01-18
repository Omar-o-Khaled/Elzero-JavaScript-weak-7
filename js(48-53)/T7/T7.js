let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// frist way
for(start+=true;start<mix.length;start++){
    if(typeof mix[start]==="number"){
        console.log(mix[start])
    }
}


// second way
/*
for(start;start<mix.length;start++){
    if(typeof mix[start]==="number" && start!=(+false)){
        console.log(mix[start])
    }
}
*/
