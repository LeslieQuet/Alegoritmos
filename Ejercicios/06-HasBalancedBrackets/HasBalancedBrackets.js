function HasBalancedBrackets (string) {
  // Your code here:

  const openBrackets = ['{', '[', '('];
  const closeBrackets = ['}', ']', ')'];
  const openedBrackets = [];

    for(let i = 0; i < string.length; i++){
      const bracket = string[i];
  
      if(openBrackets.includes(bracket)) openedBrackets.push(bracket);
  
      if(closeBrackets.includes(bracket)){
          const index = closeBrackets.indexOf(bracket);
          const par = openBrackets[index];
          const lastOpen = openedBrackets[openedBrackets.length -1];
    
          if (lastOpen === par)openedBrackets.pop();
          else return false;
        }
      }
      if(openedBrackets.length)return false;
      return true;
}
      
module.exports = HasBalancedBrackets
