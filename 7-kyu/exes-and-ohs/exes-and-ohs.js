function XO(str) {
    str = str.toLowerCase();
​
let counto =0; 
  let countx = 0; 
for(let i = 0; i <str.length; i++){
if (str[i] ==='o'){
  counto++;
} else if (str[i] === 'x'){
  countx++; 
}
}
return counto === countx; 
  }