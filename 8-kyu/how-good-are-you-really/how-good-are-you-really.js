function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
​
  classPoints.forEach(function(num) {
    total += num;
  });
​
  let n = classPoints.length + 1;
  let average = (total + yourPoints) / n;
​
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}
​
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));