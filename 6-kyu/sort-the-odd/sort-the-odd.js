function sortArray(array) {
  // Return a sorted array.
​
  let sorted_array = [];
​
  let odds_number = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
​
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sorted_array.push(array[i]);
    } else {
      sorted_array.push(odds_number.shift());
    }
  }
​
  return sorted_array;
}
console.log(sortArray([5,3,2,8,1,4]));