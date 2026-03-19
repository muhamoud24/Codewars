function basicOp(operation, value1, value2){
  //Code
  if(operation === "+" && typeof value1 ==="number" && typeof value2 === "number"){
    return value1 + value2;
  }else if(operation === "-" && typeof value1 ==="number" && typeof value2 === "number"){
    return value1 - value2;
    }else if(operation === "*" && typeof value1 ==="number" && typeof value2 === "number"){
    return value1 * value2;
      }else if(operation === "/" && typeof value1 ==="number" && typeof value2 === "number"){
    return value1/value2;
        }else { 
  return 0;
}
  }
console.log(basicOp("+",1,5));