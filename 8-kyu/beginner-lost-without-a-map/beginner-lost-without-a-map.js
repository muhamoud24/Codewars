function maps(x){
  let doubled = x.map(function(num) {
    return num * 2;
  });
​
  return doubled;
}
​
console.log(maps([1,2,3]));
​