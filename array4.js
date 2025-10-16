 const prompt=require("prompt-sync")();
   let tb =[];
   for( let i =1 ; i<=3; i++){
    let n = prompt("Entre a string "+ i +" ");
    tb.push(n);
   }
   let x = prompt("Enter a string to find :");
   let counter = 0
   let checker = false;
   for(let i = 0;i<=tb.length;i++){
    if(x===tb[i]){
        checker = true;
        counter = i
    }else{
        
    }
   }
   if(checker == true){
    console.log("The string "+ x +" is found and its posistion is "+ counter +"")
   }else{
    console.log("La chaine pas trouvée .")
   }