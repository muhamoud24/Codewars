function divisibleCount(x, y, k) {
    return Math.floor(y / k) - Math.floor((x - 1) / k);
}
// function divisibleCount(x, y, k) {
//     let result = [];
​
//     for (let i = x; i <= y; i++) {
//         if (i % k === 0) {
//             result.push(i);
//         }
//     }
​
//     return result.length;
// }