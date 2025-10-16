const prompt = require("prompt-sync")();
let numbers = [];
let sum = 0;

for(let i=0; i<10; i++) {
    let numb = parseInt(prompt("Enter a number :"));
    numbers.push(numb);
    sum += numb;
}

let average = sum / 10;

console.log("The numbers is :", numbers);
console.log("The sum is :",sum);
console.log("The average is :",average);