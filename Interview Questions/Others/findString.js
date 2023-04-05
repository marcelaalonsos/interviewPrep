//prompt
/*
given two strings, needle and haystack, return the index of the first occurance of needle in haystack, or -1 if needle is not part of haystack.
haystack is the string, and needle is the substring to find in haystack
example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
because: the needle was found at [0] in the first occurance

example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
because: beacuse the needle was not found in the haystack
*/

//approach
/*

- we know that both strings will be lowercase, so not have to worry about that
- in order to find the needle, its length has to be less than the length of the haystack

edge case 1 = needle.length > haystack.length => -1

let's use 2 pointers to compare values of char at an index for needle and the haystack
sadbutsad
i
   k

sad
   j
1. k track the char at haystack, j tracks char at needle, so we're comparing those
2. while j === k, then move both them forward
while (needle[j] === haystack[k])
k++
j++
3. if the j goes out of bounds and was equal to k, then it means, we found it, so return index i because it's where is found in the haystack

if (j === needle.length) return i

4. what happens if it's not found right away
if j is not equal to k, then move the index i
set k eqaul to i
and reset the value of j

if(needle[j] !== haystack[k]){
  i++
  k = i
  j = 0;
}

sabutsad
     i
     k

sad
j

5. what if you reach outof bounds on the haystack and did not match the chars?
sabutsa
     i
       k

sad
  j

if k === length of haystack, return -1, becuase it went out and did not find the matching
*/

const strStr = (haystack, needle) => {
  //all pointers begin at 0
  let j = 0;
  let k = 0;
  let i = 0;

  //while i is less than the length of the haystack
  while (i < haystack.length) {
    //while j === k
    while (needle[j] === haystack[k]) {
      k++;
      j++;
      //check if the j goes out of bounds, then you found it, return i
      if (j === needle.length) return i;
      //but if the k goes out of bounds, and it was not equal to j, then return -1
      if (k === haystack.length) return -1;
    }
    //if the chars are not the same
    if (needle[j] !== haystack[k]) {
      //move i up
      i++;
      //k is equal to i
      k = i;
      //reset j to 0
      j = 0;
    }
  }
  //if nothing is found after all of this return -1
  return -1;
};

//analysis
/*
time: O(n^2)
space: O(n) --> constant
*/
