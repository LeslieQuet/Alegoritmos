function SumArray (arr, n) {
  // Your code here:

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === n) return true;
    for(let j = arr.length - 1; j > 0; j--){
      if(arr[i] + arr[j] === n) return true;
      if(arr[i] === arr[j]) break;
    }
  } 
  return false;
}

module.exports = SumArray
