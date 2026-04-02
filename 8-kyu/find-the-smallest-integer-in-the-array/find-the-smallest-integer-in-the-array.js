function findSmallestInt(arr) {
  //your code here
  
 if(!arr || arr === 0) return 0;
  let Muhamoud = Math.min(...arr);
  return Muhamoud;
}
console.log(findSmallestInt([78,56,232,12,8]));