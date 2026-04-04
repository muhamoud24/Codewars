function points(games) {
  if (!games || games.length === 0) return 0;
​
  let total = 0;
​
  for (let i = 0; i < games.length; i++) {
    
    const [x, y] = games[i].split(":").map(Number);
​
    if (x > y) total += 3;
    else if (x === y) total += 1;
  }
​
  return total;
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));