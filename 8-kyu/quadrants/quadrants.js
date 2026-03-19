function quadrant(x, y) {
  // x, y 
  if(x>0 && y>0){
    return 1;
  } else if(x<0 && y>0){
    return 2;
    } else if(x<0 && y<0){
    return 3;
      } else if(x>0 && y<0){
    return 4;
        } else {
          return "fails, the number must be different from zero"
        }
  }
        console.log(quadrant(2,4));
      