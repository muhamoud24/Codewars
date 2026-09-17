function take(arr, n) {
  // Your code here
  let array = [];
  if (n < 0) return "Enter non-negative integer";
​
  if (arr.length === 0 && n >= 0) {
    return arr;
  } else {
    for (let i = 0; i < n && i < arr.length; i++) {
      array.push(arr[i]);
    }
  }
  return array;
}