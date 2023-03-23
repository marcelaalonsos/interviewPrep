//Capturing rainwater

/*
The capturing rainwater problem asks you to calculate how much rainwater would be trapped in the empty spaces in a histogram (a chart which consists of a series of bars).
This can be represented in JavaScript as an array filled with the values [4, 2, 1, 3, 0, 1, 2]. Imagine that rainwater has fallen over the histogram and collected between the bars.
Like with the road, the amount of water that can be captured at any given space cannot be higher than the bounds around it. To solve the problem, we need to write a function that will take in an array of integers and calculate the total water captured. Our function would return 6 for the histogram above.
*/

/*
The Concept:
The foundation to all the solutions for this problem is that the amount of rainwater at any given index is the difference between the lower of highest bars to its left and right and the height of the index itself:
waterAtIndex = Math.min(highestLeftBound, HighestRightBound) - heightOfIndex
*/

//Brute force solution
/*
1. Traverse every element in the array
2. Find the highest left bound for that index
3. Find the highest right bound for that index
4. Take the lower of those two values
5. Subtract the height of that index from that minimum
6. Add the difference to the total amount of water
*/

function collectRainWater(array) {
  let total = 0;
  for (let i = 1; i < array.length - 1; i++) {
    let left = 0;
    let right = 0;
    //elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) {
      left = Math.max(left, array[j]);
    }
    //elements to the right of i which are the elements at the higher indices
    for (let j = i; j < array.length; j++) {
      right = Math.max(right, array[j]);
    }
    total += Math.min(left, right) - array[i];
  }
  return total;
}

/*
Optimized Approach:
We’ll start by creating the following variables:

totalWater = 0
leftPointer = 0
rightPointer = heights.length - 1
leftBound = 0
rightBound = 0

while leftPointer < rightPointer
  if the element at leftPointer <= the element at rightPointer
    if the element is larger than leftBound, set leftBound to the element
    add the difference between leftBound and the element at leftPointer to totalWater
    move leftPointer forward by one
  else
    if the element is larger than rightBound, set rightBound to the element
    add the difference between rightBound and the element at rightPointer to totalWater
    move rightPointer back by one

return totalWater
*/

function efficientSolution(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      leftBound = Math.max(heights[leftPointer], leftBound);
      totalWater += leftBound - heights[leftPointer];
      leftPointer++;
    } else {
      rightBound = Math.max(heights[rightPointer], rightBound);
      totalWater += rightBound - heights[rightPointer];
      rightPointer--;
    }
  }
  return totalWater;
}
