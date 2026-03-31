function bmi(weight, height) {
  let bodyMassIndex = weight/(height*height);
if(bodyMassIndex <= 18.5){
  return "Underweight";
}else if(bodyMassIndex <= 25.0){
  return "Normal";
} else if(bodyMassIndex <= 30.0){
  return "Overweight";
}else if(bodyMassIndex > 30){
  return "Obese";
}
}
console.log(bmi(51, 1.72));