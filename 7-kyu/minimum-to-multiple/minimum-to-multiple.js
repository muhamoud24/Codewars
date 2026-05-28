function minimum(a, x) {
//write your solution here
  for (let i = 0; i <= x; i++) {
​
    if ((a + i) % x === 0 || (a - i) % x === 0) {
      return i;
    }
​
  }
​
}
​
console.log(minimum(10, 6));