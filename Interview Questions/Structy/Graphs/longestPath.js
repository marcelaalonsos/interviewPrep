//prompt
/*
Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.
*/

//approach
/*
adjacency list form
direct acyclic graph
depth first approach is best
return number of connection, not the nodes

terminal nodes are the final node of the potentially longest path
represent a distance from each terminal node, distance = 0;
mark nodes as visited
nodes traversed backwards add 1 to distance
*/

const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  for (let node in graph) {
    traverse(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverse = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let maxLength = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverse(graph, neighbor, distance);
    if (attempt > maxLength) maxLength = attempt;
  }
  distance[node] = 1 + maxLength;
  return distance[node];
};

//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(n);
*/
