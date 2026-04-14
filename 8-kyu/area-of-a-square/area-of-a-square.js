function squareArea(A) {
  if (!A || typeof A !== "number") return 0;
  
  // 1. Calculate the side length (s)
  // Formula: s = (2 * Arc) / PI
  let s = (2 * A) / Math.PI;
  
  // 2. Square the side to get the area
  let area = Math.pow(s, 2);
  
  // 3. Round to 2 decimal places and convert back to a number
  return +area.toFixed(2);
}
console.log(squareArea(5));