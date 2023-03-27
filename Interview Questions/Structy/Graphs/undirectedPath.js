//prompt
/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB
*/

//approach
/*
turn it into an adjacency list
nodes as keys
because it is undirected, it will reciprocate
once we have the adjacency list
case you have to handle : if graph has cycle, and if we don;t handle it, we will run into an infinite cycle
trivial cycle: between 2 vertexes that are alone in the graph

mark nodes as visited - put it on a set
traverse through neighbors and mark as visited
if visitited === dst return true
it not return false
*/

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};
//helper function to find if it has path
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};
//helper function to convert edges into graphs
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(e);
*/
