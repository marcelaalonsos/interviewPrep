const testGraph = require("./testGraph");

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);
  //iterator to go through all the edges
  start.edges.forEach((edge) => {
    const neighbor = edge.end;
    //check is visitedvertices does not include neighbor
    if (!visitedVertices.includes(neighbor)) {
      //add neighbor to array
      visitedVertices.push(neighbor);
      //recursively call function to traverse down neighbor
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0]);
