let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(counter<friends.length){
    if(!(typeof friends[counter] === "number" || friends[counter][index] === "A" )){
        console.log(friends[counter])
    }
    counter++;
}