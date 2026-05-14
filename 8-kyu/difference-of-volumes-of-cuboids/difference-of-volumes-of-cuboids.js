function findDifference(a, b) {
​
  
  let volumeA = a[0] * a[1] * a[2];
​
​
  let volumeB = b[0] * b[1] * b[2];
​
​
  let difference = volumeA - volumeB;
​
​
  return Math.abs(difference);
}
​
console.log(findDifference([2, 2, 3], [5, 4, 1])); 
console.log(findDifference([3, 2, 5], [1, 4, 4])); 