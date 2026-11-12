function highestRank(arr){
  let holder = [];
​
  for (let i = 0; i < arr.length; i++){
    let count = 0; 
    for (let j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    holder.push(`${arr[i]}:${count}`);
  }
  
  let maxFreq = 0;
  let highestNum = -Infinity;
  
  for (let i = 0; i < holder.length; i++) {
    let parts = holder[i].split(":");
    let num = Number(parts[0]);
    let freq = Number(parts[1]);
    
    if (freq > maxFreq) {
      maxFreq = freq;
      highestNum = num;
    } else if (freq === maxFreq) {
      if (num > highestNum) {
        highestNum = num;
      }
    }
  }
  
  return highestNum;
}