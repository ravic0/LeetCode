const arr = [10, 2, -2, -20, 10];
const k = -10;

// const TargetSum = (arr, k) => {
//   let start = 0;
//   let currentSum = 0;
//   let outputs = 0;
//   const outputMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     // if (outputMap.has(arr[i])) outputMap.set(arr[i], outputMap.get(arr[i]) + 1);
//     // else outputMap.set(arr[i], 1);

//     if (currentSum === k) {
//       outputs++;
//       //   outputMap.set(arr[start], arr[start] - 1);
//       currentSum -= arr[start];
//       start++;
//     }

//     if (i === arr.length - 1) {
//       while (start !== i) {
//         currentSum -= arr[start];
//         if (currentSum === k) outputs++;
//         start++;
//       }
//     }
//   }

//   return outputs;
// };

const TargetSum = (arr, k) => {
  let currentSum = 0;
  let outputs = 0;
  const outputMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    console.log("currentSum: ", currentSum);

    if (currentSum === k) outputs++;

    if (outputMap.has(currentSum - k)) {
      // same as above commented approach but instead of recalculating, we check how many times the required sum within that window (and less) was already reached
      console.log("Output map has: ", currentSum - k);
      outputs += outputMap.get(currentSum - k);
    }

    if (outputMap.has(currentSum))
      outputMap.set(currentSum, outputMap.get(currentSum) + 1);
    else outputMap.set(currentSum, 1);

    console.log("outputMap: ", outputMap);

    console.log("Outputs: ", outputs);

    console.log("--------------------\n");
  }

  return outputs;
};

console.log(TargetSum(arr, k));
