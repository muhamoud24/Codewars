function findNb(m) {
    let s = Math.sqrt(m); 
    let n = (-1 + Math.sqrt(1 + 8 * s)) / 2; 
    let sum = 0;
​
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(n - i, 3); 
    }
    if (sum === m) {
        return n;
    } else {
        return -1;
    }
}
​
console.log(findNb(1071225)); // 45
​