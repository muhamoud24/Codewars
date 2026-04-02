function isTriangle(a,b,c){
  if(!a || !b ||!c) return false;
  
  if(a === 0 && b === 0 && c === 0 ) return "!! insert numbers greater than zero"; 
  
  if(a + b > c && a + c > b && b + c > a){
    return true;
  }else{
   return false;
}
  }
console.log(isTriangle(4,6,-9));