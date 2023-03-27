//prompt
/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
*/

//approach
/*
start at one node in the component
mark nodes as visited
count every node as we visit them, and add them up
store as current largest
iterate through unvisited nodes
count nodes and add them up
if new largest is < current largest, return current, otherwise current = new
*/

const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) largest = size;
  }
  return largest;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let count = 1;
  for (let neighbor of graph[node]) {
    count += explore(graph, neighbor, visited);
  }
  return count;
};
//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(n);
*/
