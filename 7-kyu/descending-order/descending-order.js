function descendingOrder(n){
  //...
  return parseInt(n.toString().split('').sort((a,b)=> b-a).join(''),10);
}
console.log(descendingOrder(12345));