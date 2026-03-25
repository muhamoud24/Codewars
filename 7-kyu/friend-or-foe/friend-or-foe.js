function friend(friends){
 
  let b = friends.map(function(item){
    return item.length;
  });
​
  let result = [];
​
  for(let i = 0; i < friends.length; i++){
    if(b[i] === 4){
      result.push(friends[i]);
    }
  }
​
  if(result.length === 0){
    return [];
  }
​
  return result;
}
​
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));