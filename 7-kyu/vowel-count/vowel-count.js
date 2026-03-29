function getCount(str) {
  if (!str || str === 0) return 0;
  
  let newstr = str.replace(/[aeiou]/gi, "");
  
  let a = str.split("");
  let b = newstr.split("");
  let c = str.length;
  let d = newstr.length;
​
  if (c === d) {
    return 0;
  } 
  
  let f = c - d;
  return f;
}
​
console.log(getCount("muhamoud"));