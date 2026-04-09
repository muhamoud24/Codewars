function findNeedle(haystack) {
  // your code here
  if(!haystack || haystack.length === 0) return 0; 
  for(let i = 0; i < haystack.length;i++){
    if(haystack[i]==="needle"){
    let b = `found the needle at position ${i}`
       return b;
    }         
  }
 
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));