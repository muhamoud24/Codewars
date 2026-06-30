var number = function(array) {
  if (array.length === 0) return [];
​
  let result = [];
  let i = 1;
​
  for (let item of array) {
    result.push(`${i}: ${item}`);
    i++;
  }
​
  return result;
}
 
  