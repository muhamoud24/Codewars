function squareDigits(num){
​
  num = num.toString();
​
  let b = num.split("").map(function(n){
    return n * n;
  });
​
  return Number(b.join(""));
}
​
console.log(squareDigits(9119));