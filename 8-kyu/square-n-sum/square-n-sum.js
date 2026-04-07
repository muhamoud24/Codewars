function squareSum(numbers){
  if(!numbers || numbers.length === 0) return 0;
let result=0;
  for(let i =0; i<numbers.length; i++){
    numbers.forEach(function(num){
      let b = num*num; 
      result += b
    })
    return result;
  }
​
}
console.log(squareSum([1,2]));