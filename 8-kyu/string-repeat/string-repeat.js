function repeatStr (n, s) {
  if(!n && !s && typeof n !== "number" && typeof s !== "string") return '';
  
  let repeatedWord ="";
  
for(let i = 1; i <= n; i++){
  repeatedWord += s;
}
  return repeatedWord;
}