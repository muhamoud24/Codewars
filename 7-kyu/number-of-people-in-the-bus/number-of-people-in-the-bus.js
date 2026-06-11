var number = function(busStops) {
  let even = [];
  let odd = [];
​
  for (let item of busStops) {
    for (let i = 0; i < item.length; i++) {
      if (i % 2 === 0) {
        even.push(item[i]);
      } else {
        odd.push(item[i]);
      }
    }
  }
​
  const sumEven = even.reduce((sum, num) => sum + num, 0);
  const sumOdd = odd.reduce((sum, num) => sum + num, 0);
​
  return sumEven - sumOdd;
};