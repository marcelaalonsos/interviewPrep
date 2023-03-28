//prompt
/*
Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.
*/

//approach
/*
white-gray-black algorithm for cycle detection in a directed graph
white: unexplored
grey: visiting
black: visited
at the start, all the nodes are white
depth first traversal
first node is unexplored, change to visiting as it is in progress
check neighbor, change to visiting,
if it has no neighbors, change to visited
return to parent, change to visited
next iteration of nodes
start traversal,
having a visited set avoids duplicates
if the node traverse to a node that is on visiting phase, it means there is a cycle, at this point return true

*/

const hasCycle = (graph) => {
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (cycleDetect(graph, node, visiting, visited) === true) {
      return true;
    }
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }
  visiting.delete(node);
  visited.add(node);

  return false;
};
