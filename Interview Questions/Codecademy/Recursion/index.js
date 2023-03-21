const iterativeFactorial = (n) => {
  let result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    console.log(`Execution context: ${n}`);
    return n * recursiveFactorial(n - 1);
  }
};

// Set fourFactorial
const fourFactorial = iterativeFactorial(4);
console.log(fourFactorial);

const recursiveSolution = recursiveFactorial(4);
console.log(recursiveSolution);

module.exports = {
  iterativeFactorial,
  recursiveFactorial,
};
