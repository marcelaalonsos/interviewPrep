//prompt
/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

example 1:
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
*/

//approach
/*
- is the path directed/undirected? it is bi-directional, so we have to account for visited nodes as we traverse through the graph
- DFS a depth first approach will exhaust all valid paths from start to end
- beacuse we are given an edge array, let's turn that into an adjacency list object so its easier to access the data
- create a data set to store the visited nodes
- run DFS using the adjacency list from the starting node
  - at each stage, add to the visited set
  - retrieve edges from adjacency list, run DFS (using recursion)
- return true or false if our visited set has the end input node
*/

const validPath = (n, edges, start, end) => {
  //create a hashmap to be used as our adjacency list
  const graph = new Map();
  //create a set to store the visited nodes
  const visited = new Set();

  //build adjacency list
  //loop through the edges array
  //v is vertex and e is edge
  for (const [v, e] of edges) {
    //if the graph has the vertex
    if (graph.has(v)) {
      //get the vertex index and push the edge value to it
      graph.get(v).push(e);
    } else {
      //else create a key value pair
      graph.set(v, [e]);
    }
    //the other way around
    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }
  //recursive helper function
  function dfs(v) {
    //add to visited set
    visited.add(v);
    //get adjacent vertices
    const edges = graph.get(v);

    //for all adjacent vertices, run the function
    //if there are edges and its length is not null
    if (edges && edges.length > 0) {
      //loop through each edge from edges
      for (const e of edges) {
        //if its not in the visited set, then run dfs on the edge
        if (!visited.has(e)) dfs(e);
      }
    }
  }
  //DFS from starting input node
  dfs(start);
  //return true.false if the visited set has the end node
  return visited.has(end);
};

//analysis
/*
time: O(v + e)
space: O(v + e)
*/

//approach 2
/*
- we know the graph is bidrectional
- so we have to account for visited nodes as we traverse through the graph
- DFS a depth first approach will exhaust all valid paths from start to end
- beacuse we are given an edge array, let's turn that into an adjacency list object so its easier to access the data with a helper function
- create a helper function that will recursively traverse through the graph and will return true if a match is found
- the main function will create a new graph using the helper function and passing the edges
- create a new set to store visited nodes
- return the function traverse passing the graph, the source node, the destination node and the visited set
*/

const validPath = (n, edges, source, destination) => {
  //use helper function to create graph from edges
  let graph = createGraph(edges);
  //create set to store visited nodes
  let visited = new Set();
  //call the helper function to traverse the graph and return true false if it has a path
  return traverseGraph(graph, source, destination, visited);
};
//helper function to create adjacency list from an edge list
const createGraph = (edges) => {
  //object
  let adjacencyList = {};
  //iterate through the pairs of edges
  for (let [a, b] of edges) {
    //if a or b are not on the list, create them as empty keys in the object
    if (adjacencyList[a] === undefined) adjacencyList[a] = [];
    if (adjacencyList[b] === undefined) adjacencyList[b] = [];
    //since its a bidirectional graph, the value of b will be pushed to a and the other way around
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }
  return adjacencyList;
};
//helper function to traverse through graph, returns true or false if at any point in the traversal the start matched the destination
const traverseGraph = (graph, start, end, visited) => {
  //if the start is equalt to the end return true
  if (start === end) return true;
  //if the visited has the start node then return false
  if (visited.has(start)) return false;
  //add it to the visited list
  visited.add(start);
  //loop through the neighbors
  for (let neighbor of graph[start]) {
    //recursive call passing the neighbor, if it equates to true, then pass true all the way to the top
    if (traverseGraph(graph, neighbor, end, visited) === true) return true;
  }
  //otherwise return false
  return false;
};

//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(e)
*/
