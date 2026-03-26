function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
​
  let countPositives = 0;
  let sumNegatives = 0;
​
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }
​
  return [countPositives, sumNegatives];
}
​
console.log(
  countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15])
);