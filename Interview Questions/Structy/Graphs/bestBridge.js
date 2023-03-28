//prompt
/*
Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.
*/

//approach
/*
many ways to build a bridge, but we need the shortest path
shortest path algorithm -breadth first search
1. finding one island - iterate through nested loops and when you find a piece of land check for its neighbors, mark them as visited and increase island count to 1, if the position is water, ignore
2. do breadth first search towards the other island, count distance to that first island position
mark inner island positions as 0
explore outward 1 space away
2 spaces away
and when we hit the other island - the count is - 1 becauase is one before you hit the island
*/

const bestBridge = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const potentialIsland = traverseIsland(grid, r, c, new Set());
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
        break;
      }
    }
  }
  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [r, c] = pos.split(",").map(Number);
    queue.push([r, c, 0]);
  }
  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();
    const pos = r + "," + c;
    if (grid[r][c] === "L" && !mainIsland.has(pos)) {
      return distance - 1;
    }
    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = r + deltaRow;
      const neiigborCol = c + deltaCol;
      const neighborPos = neighborRow + "," + neiigborCol;
      if (
        isInbound(grid, neighborRow, neiigborCol) &&
        !visited.has(neighborPos)
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neiigborCol, distance + 1]);
      }
    }
  }
};

const isInbound = (grid, r, c) => {
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  return rowInbound && colInbound;
};

const traverseIsland = (grid, r, c, visited) => {
  if (!isInbound(grid, r, c) || grid[r][c] === "W") return visited;
  const pos = r + "," + c;
  if (visited.has(pos)) return visited;
  visited.add(pos);

  traverseIsland(grid, r - 1, c, visited);
  traverseIsland(grid, r + 1, c, visited);
  traverseIsland(grid, r, c - 1, visited);
  traverseIsland(grid, r, c + 1, visited);

  return visited;
};

//analysis
/*
r = # row
c = # col
Time: O(rc)
Space: O(rc)
*/
