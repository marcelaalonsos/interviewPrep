//prompt
/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

//approach
/*
nested code and depth first to explore a sigle island
begin nested loop at top left corner, if current position is water, ignore
if next position is land, mark as visited and check the neighbors and mark as visited as well
everytime we get a position that is land, size =1, and add them all up
store that as current min,
iterate and do the same,
if size is smaller to current min, if so, min = new
return min size
*/

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;
  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
};

//analysis
/*
r = number of rows
c = number of columns
time: O(rc)
space: O(rc);
*/
