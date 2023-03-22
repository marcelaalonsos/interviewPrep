/*
the function divideByTwo takes in a positive integer of size n and returns the number of times n must be divided by 2 until it reaches 1
*/

function divideByTwo(n) {
  let counterIterations = 0;
  while (n > 1) {
    n = n / 2;
    counterIterations++;
  }
  return counterIterations;
}

//it has a big O runtime of log n because the function divides n by two every iterations and terminates when is 1
