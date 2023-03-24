//prompt
/*
Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

//brute force approach
/*
1. iterate through array once
2. create a nested loop that starts at index 1
3. compare if sum of indices at i and j are equal to the target
4. return an array with those indices
*/

const pairSum = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
};

//optimized approach
/*
use a hash map to store indices of numbers in the array
1. start an empty object
2. iterate through the array
3. store the value of the index in a variable num
4. the complement is the target sum - num
5. if the complement is in the hash map
6. then return the index and the complement in the hashmap
7. make sure to equate previous[num] to i
*/

const pairSumOp = (numbers, targetSum) => {
  const previous = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previous) {
      return [i, previous[complement]];
    }
    previous[num] = i;
  }
};

//analysis
/*
n = length of the array
time: O(n)
space: O(n);
*/
