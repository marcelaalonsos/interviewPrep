//prompt
/*
Write a function that determines if a path exists between two vertices of a directed graph.
The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.
In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but not a connection from vertex b to vertex a.
{
  a: ['b'],
  b: ['c', 'd'],
  c: ['d']
}
*/

//approach
/*
- this is an adjacency list
a -> b -> c
      \   /
        d
- this is a directed and acyclical graph
- the function takes 3 arguments -graph, start node, and end node
- return true or false if there is a path between the start and end node
- depth first approach is the most efficient to use here
- traverse from the start node through its neighbors, as it goes down, we have to check if the current node is equal to the end node
- at one point, as it traverses down, it will find the matching end node and can return true then
- if the traversal finishes through the graph, and it did not find the matching node, then return false

*/

const doesPathExist = (graph, start, end) => {
  //consider the start node as the current node in the traversal
  //base case if the start is equal to the end node return true
  if (start === end) return true;

  //consider the neigbors of the current node
  for (let neighbor of graph[start]) {
    //recursive call and pass the neighbor as argument, if it equate to true
    if (doesPathExist(graph, neighbor, end) === true) {
      //return true
      return true;
    }
  }
  //if the path does not exist after the traversal
  return false;
};

//analysis
/*
n = number of nodes
e = number of edges
time: O(e)
space: O(n)
*/
