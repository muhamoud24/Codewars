function oddOrEven(array) {
     //enter code here
  if (array.length === 0) return "even";
​
  let sum = 0;
​
  for (let num of array) {
    sum += num;
  }
​
  return sum % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven([1,0,4]));