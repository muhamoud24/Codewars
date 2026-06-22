function sumDigPow(a, b) {
  const result = [];
​
  for (let i = a; i <= b; i++) {
    let sum = String(i)
      .split("")
      .reduce(
        (acc, digit, index) =>
          acc + Math.pow(Number(digit), index + 1),
        0
      );
​
    if (sum === i) {
      result.push(i);
    }
  }
​
  return result;
}
​