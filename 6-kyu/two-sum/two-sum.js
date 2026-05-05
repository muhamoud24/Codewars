function twoSum(numbers, target) {
  let result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let b = numbers[i] + numbers[j];
      
    if(b === target){
        result.push(i);
        result.push(j);
        return result;
  }
      }
    }
  }
​
console.log(twoSum([1, 2, 3], 4)); 