/*
The sieve provides a set of steps for finding all prime numbers up to a given limit.
As a reminder, a prime number is a positive number with no divisors but 1 and itself.
*/

/*
The algorithm works as follows:

1. Create a list of all integers from 2 to n.
2. Start with the smallest number in the list (2, the smallest prime number).
3. Mark all multiples of that number up to n as not prime.
4. Move to the next non-marked number and repeat this process until the entire list has been covered.

When the steps are complete, all remaining non-marked numbers are prime.
*/

/*
Implementation in JavaScript:
1. Create an array of all integers from 2 to n
2. Set all elements of the array to true
3. Starting with 2, iterate through the array. If the current element is true, it is still considered prime. Since we know that all multiples of that number are NOT prime, iterate through all multiples of that number up to n and set them equal to false
4. Change the current element to the next non-false index.
5. Return the corresponding number value for any element still marked as prime (value of true).
*/

const sieveOfEratosthenes = (limit) => {
  //create array with numbers of the correct size
  const output = new Array(limit + 1).fill(true);
  //ignore values at index 0 and 1, since they would be 0 and 1 numbers
  output[0] = false;
  output[1] = false;
  //create an outer loop
  for (let i = 2; i <= limit; i++) {
    //check if current number is prime
    if (output[i] === true) {
      //if it is checked as prime, mark all its multiples using another loop
      for (let j = i * 2; j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }
};

/*
Write a function findTrueIndices() that takes a single parameter, and array, and returns a new array of all indices in the input that are true.
*/
const findTrueIndices = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result.push(i);
    }
  }
  return result;
};
