function opposite(number) {
  //your code here
  if(!number || typeof number !== "number") return 0;
  if(number > 0){
    let a = -1*number;
    return a;
  }else if(number < 0){
    let a = (-1)*number;
    return a;
  } else {
    return 0;
  }
}