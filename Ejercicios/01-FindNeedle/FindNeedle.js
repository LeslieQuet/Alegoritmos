function FindNeedle (haystack, needle) {
  // Your code here:
  for( let i = 0 ; i < haystack.length; i++){
    for(let j = 0; j < needle.length + 1; j++){ 
      if(haystack[i+j] === needle[j]){
        if(j === needle.length - 1) return i; 
      } else break;
    }
  }
  return -1
}

module.exports = FindNeedle;