function rentalCarCost(d) {
  // Your solution herel
  var cost = 40;
  var total_cost = cost * d; 
if(d >= 7){
  return total_cost - 50;
} else if(d>=3){
  return total_cost - 20;
} else{
  return total_cost;
}
}
console.log(`$${rentalCarCost(90)}`);