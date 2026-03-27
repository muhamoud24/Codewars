function makeNegative(num) {
  // Code?
  if(num < 0){
    return num;
  }else if(num > 0){
    return -num;
  } else{
    return 0;
  }
}
console.log(makeNegative(10));