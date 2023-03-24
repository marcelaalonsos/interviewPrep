//prompt
/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

//approach
/*
similar to the anagrams problem, we want to create a hash map to store the count of char in the string
1. create a count object
2. iterate through the string
3. if char is not in the object
4. add it to the object and initalize it to zero
5. increase count by 1
6. we want to determine whether which letter with the most occurances comes first
7. create a variable most set to null
8. iterate through string again
9. compare if char is greater than the most, or is most is null
10. if char is greater than most, set most to that char
11. return the most variable
*/

const mostFrequentChar = (s) => {
  //start hash to store char count
  const count = {};
  //iterate through string
  for (let char of s) {
    //if string is not in object
    if (!(char in count)) {
      //initialize it to zero
      count[char] = 0;
    }
    //increment char by 1
    count[char] += 1;
  }
  //store most frequent char in variable, set it to null to begin
  let most = null;
  //iterate through string
  for (let char of s) {
    //if char is null or if the char is greater than most
    if (most === null || count[char] > count[most]) {
      //set most to that char
      most = char;
    }
  }
  //return the most frequent char
  return most;
};

//analysis
/*
n = length of string
time: O(n)
space: O(n);
*/
