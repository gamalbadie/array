 const prompt = require('prompt-sync')();
   let ar =[];
   for( let i =1 ; i<=8; i++){
    let n = parseInt(prompt("Enter a number "+ i +""));
    ar.push(n);
   }
   let x = parseInt(prompt("Entre a number : "));
   let counter = 0;
   let checker = false;
   for(let i = 0;i<=ar.length;i++)
    if(x==ar[i]){
        checker=true;
        counter=i
   }

   if(checker == true){
    console.log("Found it and it's location is :" , counter);
   }else{
    console.log("Number Not Found");
   }