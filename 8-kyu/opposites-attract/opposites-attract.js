function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 === 0 && flower2 ===0) return false; 
  
if(flower1 % 2 === 0 && flower2 % 2 !== 0){
  return true;
}else if(flower1 % 2 !== 0 && flower2 % 2 === 0){
  return true;
}else if(flower1 % 2 === 0 && flower2 % 2 === 0){
  return false;
} else{
  return false;
}
  }
console.log(lovefunc(2,6));