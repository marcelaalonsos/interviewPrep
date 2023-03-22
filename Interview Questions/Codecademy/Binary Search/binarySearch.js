const binarySearch = (arr, target) => {
  //add left and right variables
  let left = 0;
  let right = arr.length;
  while (right > left) {
    //add index to check calculation below
    const indexToCheck = Math.floor((left + right) / 2);
    //create a constant called checking
    const checking = arr[indexToCheck];
    //create a conditional below
    if (checking === target) {
      return checking;
      //if target is greater than checking
    } else if (target > checking) {
      //set left to indextocheck + 1
      left = indexToCheck + 1;
    } else {
      //set right to indextocheck
      right = indexToCheck;
    }
  }
  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 28;

console.log(binarySearch(searchable, target));

module.exports = { binarySearch };

/*
REVIEW:
The function returns the index of the target value from a sorted list. If the target value is not found, the function returns null. You used the following steps to create this function:

- Initialize the left and right indices as 0 and the length of the array.
- Create a while loop that continues to execute until the left index equals the right index.
- Get the value at the index that falls in the middle of left and right.
- Return the index if the value is equal to target.
- Set left equal to the current index plus one if the target is greater than the value.
- Set right equal to the current index if the target is less than the value.

While the benefits of binary search are significant compared to linear search, it’s important to remember that the function will only work on sorted lists
*/
