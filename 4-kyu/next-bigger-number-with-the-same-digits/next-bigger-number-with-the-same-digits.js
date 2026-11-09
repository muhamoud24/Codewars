function nextBigger(n) {
  if (n === undefined || typeof n !== 'number') return ' input valid number';
  
  const digits = n.toString().split("");
  if (digits.length === 1) return -1;
  
  let pivotIndex = -1;
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      pivotIndex = i;
      break;
    }
  }
  
  if (pivotIndex === -1) return -1;
  
  let smallestGreaterIndex = -1;
  for (let i = digits.length - 1; i > pivotIndex; i--) {
    if (digits[i] > digits[pivotIndex]) {
      smallestGreaterIndex = i;
      break;
    }
  }
  
  [digits[pivotIndex], digits[smallestGreaterIndex]] = [digits[smallestGreaterIndex], digits[pivotIndex]];
  
  const rightSideSorted = digits.splice(pivotIndex + 1).reverse();
  return parseInt(digits.concat(rightSideSorted).join(""), 10);
}
​