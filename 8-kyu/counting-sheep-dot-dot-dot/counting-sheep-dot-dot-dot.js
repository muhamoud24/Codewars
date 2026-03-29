function countSheeps(sheep) {
  // TODO
  if(sheep === 0 || !sheep) return 0;
  
  let countTrue = 0;
  let countFalse = 0;
  
for (let i = 0; i <= sheep.length; i++){
  if(sheep[i]=== true){
    countTrue++;
  }else {
    countFalse++;
  }
}
  return countTrue;
}
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));