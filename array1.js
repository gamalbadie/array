 const prompt = require("prompt-sync")();
   let ar =[];
   for( let i =1 ; i<=5; i++){
    let n = prompt("Enter a number :");
    ar.push(n);
   }
   console.log(ar.reverse())