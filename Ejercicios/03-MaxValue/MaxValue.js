function MaxValue (shares) {
//Solución refactor 2

  let bestBuy = shares[0]; 
  let bestSell = shares[1]; 

  for(let i = 0; i < shares.length; i++){
    if(shares[i] < bestBuy) bestBuy = shares[i]; 
    if(shares[i+1] > bestSell) bestSell = shares[i+1]; // 11 > 5
  }
  return bestSell - bestBuy; // 11 - 2 = 9
}

//Complejidad >>> O(n) - Solución refactor
//function MaxValue (shares) {
//   let maxProfit = -Infinity;
//   let minValue = shares[0];

//   for(let i = 1; i < shares.length; i++){
//     const sell = shares[i];
//     const actualProfit =  sell - minValue;
//     // if(actualProfit > maxProfit) maxProfit = actualProfit;
//     maxProfit = actualProfit > maxProfit ? actualProfit : maxProfit;
//     // if(sell < minValue) minValue = sell;
//     minValue = sell < minValue ? sell : minValue;
//   }

//   return maxProfit;
// }



// Complejidad >>> O(n^2) - Solución fuerza bruta 
// function MaxValue (shares) {
//   let maxProfit = -Infinity;

//   for(var i = 0; i < shares.length -1; i++){
//     const buy = shares[i];
//     for(var j = i + 1; j < shares.length; j++){
//       const sell = shares[j];
//       const actualProfit = sell - buy; 
//       if(actualProfit > maxProfit) maxProfit = actualProfit;
//     }
//   }
//   return maxProfit;
// }

module.exports = MaxValue
