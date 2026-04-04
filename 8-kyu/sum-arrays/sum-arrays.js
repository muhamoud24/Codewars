function sum (numbers) {
  if (!numbers) return "Undefined";
  if(numbers.length === 0) return 0;
let b;
for(let i=0; i<numbers.length;i++){
let sum = 0;
numbers.forEach(function(num){
   b = sum += num
  });
  }
  return b;
}