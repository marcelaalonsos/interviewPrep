//prompt
/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

//approach
/*
general counting algoright
set count = 0;
start iterating through every node of the list, start a traversal as far as possible
mark things as visited, and to ensure we;re not double counting
once each node has fully traversed, count ++;

*/

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(n);
*/
