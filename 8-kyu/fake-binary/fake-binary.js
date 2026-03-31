function fakeBin(x){
  let results = [];
  let a;
  let b;
​
  for(let i = 0; i < x.length; i++){
    if(x[i] < 5){
      a = "0";
      results.push(a);
    } 
    if(x[i] >= 5){
      b = "1";
      results.push(b);
    }
  }
​
  return results.join("");
}
console.log(fakeBin(654976));