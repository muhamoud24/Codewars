function filter_list(l) {
  let new_array = [];
​
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      new_array.push(l[i]);
    }
  }
  return new_array;
}
console.log(filter_list([1,2,'a','b']));