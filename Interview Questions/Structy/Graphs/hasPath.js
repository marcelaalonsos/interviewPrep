//prompt
/*
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

//approach
/*
each key is a node in the graph
acyclic means no cycle
depth first
is current node equal to destination
if so, then true
never travel upstream
runtime is O(n^2)
space O(n)
*/

//depth first recursive
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

//breadth first recursive
// const hasPath = (graph, src, dst) => {
//   const queue = [src];
//   while(queue.length > 0) {
//     const current = queue.shift();

//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// }

//analysis for both
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(n);
*/
