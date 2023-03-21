const recursiveSum = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n > 0) {
    return n + recursiveSum(n - 1);
  }
};
