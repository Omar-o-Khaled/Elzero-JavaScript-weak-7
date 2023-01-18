let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;


for(let i=0;i<showCount;i++){
    document.write(`<h3>${i+1}) ${products[i]}</h3>`);
    for(let k=0;k<colors.length;k++){
        document.write(`<div>- ${colors[k]}</div>`);
    }
    document.write( colors.join(" || "));
}