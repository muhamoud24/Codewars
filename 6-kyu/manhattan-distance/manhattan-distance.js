// function manhattanDistance(pointA, pointB){
//   if(!pointA ||!pointB ||!Array.isArray(pointA) ||!Array.isArray(pointB)) return 'Enter valid distances'; 
//   if(pointA.length !== 2 && pointB.length !==2 ) return "Enter only two distance arrays";
  
// return Math.abs(pointA[0]-pointB[0]) + Math.abs(pointA[1]-pointB[1]);
// }
​
 let manhattanDistance = (pointA, pointB) =>{
   return Math.abs(pointA[0]-pointB[0]) + Math.abs(pointA[1]-pointB[1]);
 }