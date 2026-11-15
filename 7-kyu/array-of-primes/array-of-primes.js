function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
​
function primes(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.length > 0 ? result : null;
}