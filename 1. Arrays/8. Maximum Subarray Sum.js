const arr = [-1, 2, 3, 4, -2, 6, -8, 3]; // 13

const maximumSubarraySum = (arr) => {
  let currentSum = 0;
  let maxSum = 0;

  for (const num of arr) {
    currentSum = currentSum + num;

    if (num > currentSum) currentSum = num;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum(arr));
