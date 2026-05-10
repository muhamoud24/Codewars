function between(a, b) {
  // your code here
  if (a > b ) return "Enter a less than b"; 
  let result = [];
for (let i = a; i <= b; i++){
  result. push(i);
}
  return result;
}
console.log(between(1,10));