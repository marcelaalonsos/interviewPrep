const swap = require("./swap");

const bubbleSort = (input) => {
  //variable to store condition of array, true if is unsorted
  let swapping = true;
  //outer loop - runs if the array is not sorted
  while (swapping) {
    //if array is sorted
    swapping = false;
    //inner loop - visits every element
    for (let i = 0; i < input.length - 1; i++) {
      //check if element at current index is greater than element next to it
      if (input[i] > input[i + 1]) {
        //call helper function
        swap(input, i, i + 1);
        //keep loop running by changing value of condition
        swapping = true;
      }
    }
  }
  //returns the array
  return input;
};

module.exports = bubbleSort;

// Reverse-sorted array:
bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
// Sorted array:
bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);
