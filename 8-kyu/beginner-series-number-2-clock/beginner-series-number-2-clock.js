function past(h, m, s){
  //#Happy Coding! ^_^
const used = 60; 
let hmilliseconds = h*used*used*1000; 
let mmilliseconds = m*used*1000;
let smilliseconds = s*1000; 
​
  let result = hmilliseconds + mmilliseconds + smilliseconds;
  
  return result; 
}
console.log(past(4,30,55));