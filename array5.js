const prompt=require("prompt-sync")();
let tb = [];
for (let i = 1; i < 7; i++) {
    let n = parseInt(prompt("Enter a number "+ i +" :"));
  tb.push(n);
}

let max = tb[0];
let min = tb[0];

for (let i = 1; i < tb.length; i++) {
  if (tb[i] > max) {
    max = tb[i];
  }
  if (tb[i] < min) {
    min = tb[i];
  }
}

console.log("The biggest is :" + max);
console.log("The smallest is :" + min);