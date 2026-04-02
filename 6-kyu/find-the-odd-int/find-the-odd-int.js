function findOdd(A) {
  if (!A || A.length === 0) {
    return 0;
  }
​
  if (A.length === 1) {
    return A[0];
  }
​
  if (A.length > 1) {
    for (let i = 0; i < A.length; i++) {
      let count = 0;
​
      for (let j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          count++;
        }
      }
​
      if (count % 2 !== 0) {
        return A[i];
      }
    }
  }
}
console.log(findOdd([1,1,1,3,4,5,2,1,3,4,1]));