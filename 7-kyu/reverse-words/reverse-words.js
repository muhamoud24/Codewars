function reverseWords(str) {
  if (str.length === 0) return "";
​
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}