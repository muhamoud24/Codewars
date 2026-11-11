function orderWord(s) {
  if (!s || s.length === 0) return "Invalid String!";
  
  let stringArray = s.split("");
  let charcode = [];
  
  for (let i = 0; i < stringArray.length; i++) {
     let b = stringArray[i].charCodeAt(0);
     charcode.push(b);
  }
  
  charcode.sort((a, b) => a - b); 
  let result = "";
  for (let i = 0; i < charcode.length; i++) {
     result += String.fromCharCode(charcode[i]);
  }
​
  return result;
}
​