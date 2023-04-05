//prompt
/*
given an array arr of distinct integers and a non-negativeinteger k, write a function findPairsWithGivenDifference that returns an array, of all pairs [x,y] in arr, such that x-y = k.
if no such pairs exists, return an empty array;

note: the order of the pairs in the output array should maintain the order of the y element in the original array.
*/

//approach
/*
k is the result of taking 2 numbers of the array and the difference between them
exmaple:
arr = [0, -1, -2, 2, 1];
k = 1
output = [[1, 0], [0, -1], [-1, -2], [2, 1]]

nested loops, where the value at i is subtracted the value at j and if that is equal to k
once we've found that result, then we can add them to the array
to fit the index condition, we can use the index to place the pairs in the correct sequence
once the values are there, we can filter out the empty values and return the results array
result array = [];

*/

const findPairsWithGivenDifference = (arr, k) => {
  //result array
  let result = [];
  //outer loop
  for (let i = 0; i < arr.length; i++) {
    //save x value
    let x = arr[i];
    //inner loop
    for (let j = 0; j < arr.length; j++) {
      //save y value
      let y = arr[j];
      //find difference
      if (x - y === k) {
        //if so, place it in the right order in the array
        result[j] = [x, y];
      }
    }
  }
  //filter out null values
  result = result.filter((element) => element !== null);
  //return the result array
  return result;
};

//analysis
/*
n = length of array
time: O(n^2)
space: O(1)
*/
