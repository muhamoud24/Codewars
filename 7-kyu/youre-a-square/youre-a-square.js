var isSquare = function(n) {
  return Number.isInteger(Math.sqrt(n));
}
​
console.log(isSquare(9));  // true
console.log(isSquare(10)); // false