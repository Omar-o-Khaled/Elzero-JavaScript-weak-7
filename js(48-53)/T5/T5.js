let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i=0;i<friends.length;i++){
    if(!(friends[i][0].toLocaleLowerCase() == letter)){
        console.log(friends[i])
    }
    
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"