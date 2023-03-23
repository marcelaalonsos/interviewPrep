const testGraph = require("./testGraph");
const Queue = require("./Queue");

const breadthFirstTraversal = (start) => {
  //visitedvertices array
  const visitedVertices = [start];
  //start a queue of visited
  const visitQueue = new Queue();
  //enqueue start
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    //current is the dequeued next vertex
    const current = visitQueue.dequeue();
    //iterate through all edges
    current.edges.forEach((edge) => {
      //neighbor is the end property of each edge
      const neighbor = edge.end;
      //check if visitedvertices does not have neighbor
      if (!visitedVertices.includes(neighbor)) {
        //push it to the array
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
    console.log(visitedVertices);
  }
};

breadthFirstTraversal(testGraph.vertices[0]);
