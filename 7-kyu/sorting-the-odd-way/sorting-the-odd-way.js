​
const sortItOut = (array) => {
  
  return array.filter( num => Math.floor(num) % 2 !== 0).sort((a,b)=> a - b)
  .concat(array.filter(num => Math.floor(num) % 2 === 0).sort((a,b)=> b - a));
  
}
console.log(sortItOut([1,2,3,4,5,6,7,8,9]));