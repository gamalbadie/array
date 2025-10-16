let tb=["a", "e", "i", "o", "u", "y"];
const prompt=require('prompt-sync')();
let ch=prompt("Enter a number of strings :");
let sli= ch.split('');
let counter = 0;
for(let i =0;i<=tb.length;i++){
    for(let j=0;j<=sli.length-1;j++){
        if(tb[i]===sli[j]){
            counter++;
        }
    }
}
console.log("Number of vowels :",counter);