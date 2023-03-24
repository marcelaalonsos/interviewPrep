//prompt
/*
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

//brute force
/*
1. create empty array for result
2. iterate through array 2
3. if a includes elem of b
4. push elem to result array
5. return array
*/

const intersection = (a, b) => {
  const result = [];
  for (let elem of b) {
    if (a.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
};

//optimized approach
/*
1. create an empty array that will return the pairs
2. create a set to store the values of the first array
3. iterate through second array and grab that element
4. compare if set has that element
5. if it is, push to result array
6. return result array
*/

const intersectionOp = (a, b) => {
  let result = [];
  let setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};

//analysis
/*
n = length of the array 1
m = length of array 2
time: O(n + m)
space: O(n);
*/
