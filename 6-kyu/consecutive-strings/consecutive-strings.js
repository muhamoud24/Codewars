function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";
  let longest = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let combined = "";
    for (let j = i; j < i + k; j++) {
      combined += strarr[j];
    }
    if (combined.length > longest.length) {
      longest = combined;
    }
  }
  return longest;
}
​