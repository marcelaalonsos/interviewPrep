/*
Write a function uncompress, that takes in a string as an argument. the input string will be formatted into multiple groups according to the following pattern:
<number><char>
for example, '2c' or '3a'

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'numer' times consecutively.
You may assume that the input string is well-formed according to the previous pattern.
*/

//approach
/*
1. store numbers in a variable
2. set an empty string variable to hold the result
3. set pointer i that tracks numbers, starts at 0
4. set pointer j that tracks characters, starts at 0
5. while j is less than the length of the string
6. check if numbers include j
7. if not, then add and set j + 1 to move it forward
8. if it is a number, then slice string from i to j
9. parse that as a Number
10. add character to the result num number of times
11. loop through the count starting at 0, while is it less than num and adding and setting to 1
12. concatenate character
13. update counters outside for loop - j by 1, and set i = j
14. return the result
*/

//solution 1
const uncompress = (s) => {
  const numbers = "0123456789";
  let result = "";
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result += s[j];
      }
      j += 1;
      i = j;
    }
  }
  return result;
};

//solution 2 more optimized
const uncompress2 = (s) => {
  const numbers = "0123456789";
  let result = [];
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join("");
};
