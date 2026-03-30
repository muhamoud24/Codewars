function grow(x){
if(!x || x === 0) return 0;
  let multiplying = 1; 
  x.forEach(function(num){
    multiplying *= num
  });
​
  return multiplying;
  }
​
console.log(grow([1,2,3]));