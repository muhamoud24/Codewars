function hero(bullets, dragons){
//Get Coding!
  
  let b = 2 * dragons; 
  if(bullets >= b){
    return true;
  }else{
    return false;
  }
}
console.log(hero(4,5));
​