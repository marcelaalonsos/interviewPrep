//prompt
/*
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
*/

//approach
/*
1. we want to have a hash map that tracks the count of each character of each string
2. iterate through the first string, and check if it exists in the object
3. if it does not, add it to the object inititalize with zero
4. increase count by 1
5. iterate through the second string
6. if the char already exists, then decrease count by 1 because we want to have equal numbers of chars
7. if the char is not in the obj, then return false
8. return true if at the end the count is zero throughout
*/

const anagrams = (s1, s2) => {
  //create an empty object where you would save the occurances of each char
  const count = {};
  //loop through string1
  for (let char of s1) {
    //if char is not in the object
    if (!(char in count)) {
      //add it to the object
      count[char] = 0;
    }
    //increase count by 1
    count[char] += 1;
  }
  //loop through string2
  for (let char of s2) {
    //if char is in object
    if (char in count) {
      //decrease the count by 1
      count[char] -= 1;
    } else {
      return false;
    }
  }
  //loop through the keys of the object
  for (let char in count) {
    //if the value of that key is not zero return false
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
};
