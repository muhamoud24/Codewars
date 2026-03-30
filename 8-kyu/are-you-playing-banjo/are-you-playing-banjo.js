function areYouPlayingBanjo(name) {
  // Implement me
  
  for(let i = 0 ; i < name.length; i++){
  if( name[0] === "r" || name[0] === "R"){
    return name + " plays banjo";
  } else {
    return name +  " does not play banjo";
  }
} 
  
}
console.log(areYouPlayingBanjo("Adam"));