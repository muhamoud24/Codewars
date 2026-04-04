function SeriesSum(n) {
  // Happy Coding ^_^
  if(n === 0) return "0.00";
  let sum = 0;
for(let i= 1; i <= n; i++){
  sum += 1/((3*i)-2);
}
  return sum.toFixed(2);
}
console.log(SeriesSum(4));