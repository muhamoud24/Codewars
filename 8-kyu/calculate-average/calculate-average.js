function findAverage(array) {
  // your code here
if(!array || array.length === 0){
   return 0;
}
 let sum= 0; 
  array.forEach(function(num){
    sum +=num;
  });
  return sum/array.length; 
  
}
​
console.log(findAverage([1,2,3]));
​