//prompt
/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
*/

//approach
/*
already know the core pattern to get levels
the root node is at level 0 and the children are at level + 1
create a subarray of every level
take subarrays and find average of that array
take those values and push it to an array of average
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//recursive depth first
const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  const avgs = [];
  for (let level of levels) {
    avgs.push(getAvg(level));
  }
  return avgs;
};

//helper function to get average
const getAvg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};

//helper function that will find levels
const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
