const Merge = (left, right) => {
  const output = [];

  let leftTracker = 0;
  let rightTracker = 0;
  let localInversions = 0;

  while (leftTracker !== left.length && rightTracker !== right.length) {
    if (left[leftTracker] <= right[rightTracker]) {
      output.push(left[leftTracker]);
      leftTracker++;
    } else {
      output.push(right[rightTracker]);
      Merge.inversions += left.length - leftTracker;
      localInversions += left.length - leftTracker;
      rightTracker++;
    }
  }

  //   console.log("Left tracker: ", leftTracker);
  //   console.log("Right tracker: ", rightTracker);

  while (leftTracker != left.length) {
    output.push(left[leftTracker]);
    leftTracker++;
  }

  while (rightTracker != right.length) {
    output.push(right[rightTracker]);
    rightTracker++;
  }

  console.log("Inversions for: ", left, " and ", right, ": ", localInversions);

  return output;
};

Merge.inversions = 0;

const MergeSort = (arr, n) => {
  if (arr.length === 1) {
    return arr;
  }
  const start = 0;
  const end = arr.length;
  const mid = Math.ceil((start + end) / 2);
  const arr1 = arr.slice(start, mid);
  const arr2 = arr.slice(mid);

  const left = MergeSort(arr1, n);
  const right = MergeSort(arr2, n);
  const output = Merge(left, right);

  return output;
};

// MergeSort([0, 0, 4, 6, 1, 2, 5, 0], 3);
// MergeSort([0, 5, 2, 3, 1], 3);
MergeSort([5, 4, 3, 2, 1], 3);
console.log(Merge.inversions);
