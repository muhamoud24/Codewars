function getSum(a, b){
   //Good luck!
   if(a === b) return a;  
   if(typeof a !== "number" || typeof b !== "number") return 0;
​
   let sum = 0;
   if(a > b){
     for(let i = b; i <= a; i++){
       sum += i;
     }
   } else {
     for(let i = a; i <= b; i++){
       sum += i;
     }
   }
   return sum;
}
console.log(getSum(10,90));