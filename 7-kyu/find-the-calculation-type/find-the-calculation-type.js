 function calcType(a, b, res) {
  
  if (a === 0 && b === 0 && res === 0) return 0; 
​
​
  return (a + b === res) ? "addition" 
       : (a * b === res) ? "multiplication" 
       : (a - b === res) ? "subtraction" 
       : (a / b === res || b / a === res) ? "division" 
       : "unknown"; 
}
​