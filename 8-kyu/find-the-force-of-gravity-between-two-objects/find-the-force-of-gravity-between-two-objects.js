function solution (arr_val, arr_unit){
​
  if(!arr_val || !arr_unit) return 0;
  
  let arra_val1 = []; 
  
  for (let i = 0; i < arr_val.length; i++) {
    let val = arr_val[i];
​
    // MASS conversions (index 0 and 1)
    if (i < 2) {
      if (arr_unit[i] === "g") val /= 1000;
      else if (arr_unit[i] === "mg") val /= 1e6;
      else if (arr_unit[i] === "μg") val /= 1e9;
      else if (arr_unit[i] === "lb") val *= 0.453592;
    }
​
    // DISTANCE conversions (index 2)
    if (i === 2) {
      if (arr_unit[i] === "cm") val /= 100;
      else if (arr_unit[i] === "mm") val /= 1000;
      else if (arr_unit[i] === "μm") val /= 1e6;
      else if (arr_unit[i] === "ft") val *= 0.3048;
    }
​
    arra_val1.push(val);
  }
​
  let G = 6.67e-11;
​
  let m1 = arra_val1[0];
  let m2 = arra_val1[1];
  let r_squared = arra_val1[2] * arra_val1[2];
​
  let G_force = (G * m1 * m2) / r_squared;
​
  return G_force; 
}
console.log(solution([1000, 1000, 100], ["g", "kg", "m"]));