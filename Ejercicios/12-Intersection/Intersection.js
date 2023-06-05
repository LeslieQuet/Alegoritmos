
function intersection (arr1, arr2) {
  // Your code here:
  return arr1.filter(num1 => arr2.includes(num1))
}
//Complejidad O(n*m)


//Solución fuerza bruta Complejidad O(n*m)
// function intersection (arr1, arr2) {
//   // Your code here:

//   const result = [];

//   for(const num1 of arr1){
//     for(const num2 of arr2){
//       if(num1 === num2) result.push(num1);
//     }
//   }
//   return result;
// }

module.exports = intersection
