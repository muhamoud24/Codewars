​
const sortItOut = (array) => {
  
  let evenNumbers = [];
  let oddNumbers =[];
  
for(let num of array){
  
  Math.floor(num) % 2 === 0 ? evenNumbers.push(num) : oddNumbers.push(num);
  
}
  oddNumbers = oddNumbers.sort((a,b)=> a - b); 
  evenNumbers = evenNumbers.sort((a,b)=> b - a);
​
  return [...oddNumbers, ...evenNumbers];
  
}
console.log(sortItOut([1,2,3,4,5,6,7,8,9]));