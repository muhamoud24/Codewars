function findOdd(array) { 
  let b = []; 
 
  for (let i = 0; i < array.length; i++) { 
    let count = 0; 
 
    for (let j = 0; j < array.length; j++) { 
      if (array[i] === array[j]) { 
        count++; 
      } 
    } 
 
    if (count % 2 !== 0) { 
      b.push(array[i]); 
    } 
  } 
 
  return b[0]; 
} 
 
console.log(findOdd([1, 1, 2]));