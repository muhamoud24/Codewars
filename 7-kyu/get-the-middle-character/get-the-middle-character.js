function getMiddle(s) {
  if(s.length === 1) return s; 
  if(!s) return "undefined";
let middle = Math.floor(s.length/2);
​
return s.length % 2 === 0 ? s.slice(middle-1, middle+1): s[middle];
}