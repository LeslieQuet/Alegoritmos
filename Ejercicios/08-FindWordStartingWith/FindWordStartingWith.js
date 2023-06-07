function FindWordStartingWith (book, query) {
  // Your code here:
  
  const txt = book.text.toLowerCase();
  query = query.toLowerCase();
  const result = [];
  
  for(var i = 0; i < txt.length; i++){
    const sliced = txt.slice(i, i + query.length)
    if(sliced === query && (txt[i-1]=== ' ' || i === 0)) result.push(i);
  }
  return result;
}

const book = {
  id: 1,
  text:
    'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}

console.log(FindWordStartingWith (book, "un"))

module.exports = FindWordStartingWith
