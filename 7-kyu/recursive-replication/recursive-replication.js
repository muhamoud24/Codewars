function replicate(times, number) {
  if (times < 0) return [];
​
  let b = number.toString() + ",";
  let replicated = b.repeat(times);
​
  return replicated
    .split(",")
    .filter(x => x !== "")
    .map(Number);
}
​
console.log(replicate(3, 124));
​