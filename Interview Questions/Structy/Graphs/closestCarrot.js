//prompt
/*
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.
*/

//approach
/*
breadth-first search, because we want to track distance over time
statring point distance is 0, neighbors woould be distance + 1
map out extends until the distance hits the carrot
return that path distance
*/

const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set([startRow + "," + startCol]);
  const queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    if (grid[row][col] === "C") return distance;

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neighborCol = col + colDelta;
      const rowInbound = 0 <= neighborRow && neighborRow < grid.length;
      const colInbound = 0 <= neighborCol && neighborCol < grid[0].length;
      const pos = neighborRow + "," + neighborCol;
      if (
        rowInbound &&
        colInbound &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(pos)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(pos);
      }
    }
  }
  return -1;
};

//analysis
/*
r = number of rows
c = number of columns
time: O(rc)
space: O(rc);
*/
