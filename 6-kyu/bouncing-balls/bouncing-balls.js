function bouncingBall(h,  bounce,  window) {
  
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let firstview = 1;
  let secondviewBounce= 1; 
  let rebouncingHeight = h * bounce; 
  if (rebouncingHeight <= window) {
    return firstview; 
  }
  if (rebouncingHeight > window) {
     return firstview + secondviewBounce + bouncingBall(rebouncingHeight, bounce, window); 
  }
}
​