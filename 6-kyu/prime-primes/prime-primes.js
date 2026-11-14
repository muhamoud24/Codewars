const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
​
const primePrimes = n => {
  if (!n || typeof(n) !== "number") return [0,0];
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
​
  let count = 0;
  let sum = 0;
​
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      count++;
      sum += primes[i] / primes[j];
    }
  }
​
  return [count, Math.floor(sum)];
};