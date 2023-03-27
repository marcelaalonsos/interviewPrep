//prompt
/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

//approach
/*
row and column indices
traverse through grid as node positions
given any position of the grid, we can know what the neighbors look like
top left is (0,0)
count number of connected components
nested loops to iterate through each row

start nested loop in the top of the grid (0,0)
check if current position is land, if not continue
when find land, use depth first, mark as visited and check if neighbors are land too, increment the count after exploring the island
scan for another land node
it should avoid visited lands

*/

const islandCount = (grid) => {
  const visited = new Set();

  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};

//analysis
/*
r = number of rows
c = number of columns
time: O(rc)
space: O(rc);
*/
