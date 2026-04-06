function arrayDiff(a, b) {
  if(!a || !b ||a.length === 0) return [];
  let result = [];
 for(let i = 0; i<a.length;i++){
   let count = 0;
   for(let j=0; j<b.length;j++){
     if(a[i] === b[j]){
       count++   
     }
   }
   if(count === 0){
     result.push(a[i]);
   }
 } 
  
  return result;
}
console.log(arrayDiff([1,2], [1]));