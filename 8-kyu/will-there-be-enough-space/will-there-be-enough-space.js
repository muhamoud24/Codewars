function enough(cap, on, wait) {
  // your code here
if(!cap || !on  || !wait) return "Enter the right input";
  let b = on + wait;
  let c = b - cap;
  if(b <= cap){
    return 0;
  }else{
    return c;
  }
}
console.log(enough(160,90,100));