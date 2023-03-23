//knapsack

/*
The first step to solving this problem is to understand the parameters involved. You will be given:

- the total amount of weight you can carry (weightCap)
- the weights of all of the items in an array (weights)
- the values of all of the items in an array (values)
Your function should return the maximum value that you will be able to carry.
*/

//recursive solution
/*
You will need an additional parameter, i, that tells us where we are in the list of items. With each step, we will break the problem down into subproblems, and compare them to find the maximum value. There are three possibilities for every call of the function:

1. weightCap or i are zero, meaning the knapsack can hold no weight, or there are no more items to look at. In either case, we return 0.
2. The weight of the item we’re looking at exceeds weightCap, in which case we just move on, calling the function on the next item.
3. If neither of the above are true, that means we have to consider whether or not the item we are at (i) should be included in the optimal solution.

Steps 1 and 2 from above can be solved as follows:

const recursiveKnapsack = function(weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  }
};
For step 3, we need to look at both situations and determine if we want to include this item in our optimized solution or not.
*/

const recursiveKnapsack = function (weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem =
      values[i - 1] +
      recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
};

//dynamic approach
/*
The pseudocode for the entire algorithm is as follows:

matrix = array with length equal to number of items
for every number of items you can carry (index):
  fill matrix[index] with an array of length weightCap + 1
  for every weight < weightCap (weight):
    if index or weight == 0:
      set element at [index][weight] to 0
    else if the weight of element at index - 1 <= weight:
      find possible values of including and excluding the item
      set element at [index][weight] to max of those values
    else:
      set element at [index][weight] to element one above
return element at bottom right of matrix
*/
const dynamicKnapsack = function (weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      // Write your code here:
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      } else if (weights[index - 1] <= weight) {
        const includeItem =
          values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
        const excludeItem = matrix[index - 1][weight];
        matrix[index][weight] = Math.max(includeItem, excludeItem);
      } else {
        matrix[index][weight] = matrix[index - 1][weight];
      }
    }
  }
  return matrix[numItem][weightCap];
};
