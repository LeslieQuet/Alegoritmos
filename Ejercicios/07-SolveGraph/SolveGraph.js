//Solución más eficiente, usa un objeto en lugar de un array (se revisa directamente la propiedad sin iterar)
function SolveGraph (graph, start, target, visited = {}) {

  if(visited[start]) return;
  visited[start] = true;

  for(const node of graph[start]){
    if(node === target) return true;
    if(SolveGraph(graph, node, target, visited)) return true;
  }
  return false;
}


//Solución fuerza bruta
// function SolveGraph (graph, start, target, visited = []) {

//   if(visited.includes(start)) return;
//   visited.push(start);

//   for(const node of graph[start]){
//     if(node === target) return true;
//     if(SolveGraph(graph, node, target, visited)) return true;
//   }
//   return false;
// }

module.exports = SolveGraph
