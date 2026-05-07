function invert(array) {
   
  if(array.length === 0) return [];
​
 let b = array.map(function(num){
   return -num; 
 });
  return b; 
}
console.log(invert([1,2,3,4,5]));