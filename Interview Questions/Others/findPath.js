//prompt
/*
There is a bi-directional graph with n (number) of vertices, where each vertex is labeled from 0 to n-1(inclusive). For example, if n = 4, then it will have vertex 0, 1, 2, and 3. The edges in the graph are represented as a 2D array edges, where each edges[i]= [u, v], which denotes a bi-directional edge between vertex u and vertex v. For example, edges = [[0,1]], then there is a path between 0 and 1 and the other way around.
Every vertex pair is connected by at most one edge and no vertex has an edge to itself. No floating node.
You wnat to determine if there is a path that exists from vertex source to vertex destination.
Given the edges array, and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

example 1
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
because: you can go directly 0 to 2, or 0-1-2

0<-->1
 \  /
  2

Example 2:
Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
because: there is no path between 0 and 5

0<->1   3<->5
\        \  /
 2        4
*/

//approach
/*
several inputs, and the output is a boolean
this is bidirectional graph, it will have cycles, but the information given, it's hard to traverse through it
- so we have to turn the edge array into an adjacency list, so its easier to loop through it
- since it's a bidirectional graph, in the main function, we should track the nodes we already traversed through, to avoid an infinite loop, and we can store that in a set, call it visited
- to traverse, a depth first approach is smarter becuase it will exhaust all the nodes in one avenue, before moving to the next, so basically going down a path until finding the destination
- at every point of the traversal, you are comparing the current node to the destination and returning true if you find the match, or false at the absolute end of it, if it did not find a path
1. helper function that turns edge array into an adjacency list
2. helper funciton to traverse through the graph
3. our main function that determines whether its a valid path or not
*/
//main function
const validPath = (n, edges, source, destination) => {
  //create graph to traverse through it
  let graph = createGraph(edges);
  //visited set to store the visited nodes - global variable
  let visited = new Set();
  //use the helper traversal funtion to call it on the graph we created and the source, destination
  return traverse(graph, source, destination, visited);
};

//helper function to build the adjacency list
const createGraph = (edges) => {
  //adjacency list an object
  let adjacencyList = {};

  //edges [a,b], we need to iterate through them
  for (let [a, b] of edges) {
    //check if they exist in the adjacencyList
    if (adjacencyList[a] === undefined) adjacencyList[a] = [];
    if (adjacencyList[b] === undefined) adjacencyList[b] = [];
    //beacuase its a bidirectional graph, then we now that a->b && b->a
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }
  return adjacencyList;
};

//traversal helper function
const traverse = (graph, source, destination, visited) => {
  //base case is that the source === destination
  if (source === destination) return true;
  //we want to check if the source which is the current node is the the visited set
  if (visited.has(source)) return false;
  //add source to visited
  visited.add(source);
  //you want to check for the neighbors, for the values inside the node at the graph
  for (let neighbor of graph[source]) {
    //recursively call this function passing the neighbor as the source node
    if (traverse(graph, neighbor, destination, visited) === true) return true;
  }
  return false;
};

//analysis
/*
n = nodes
e = edges
time: O(e);
space: O(e);
*/
