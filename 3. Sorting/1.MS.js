const Merge = (left, right) => {
  const output = [];

  let leftTracker = 0;
  let rightTracker = 0;

  while (leftTracker !== left.length && rightTracker !== right.length) {
    if (left[leftTracker] < right[rightTracker]) {
      output.push(left[leftTracker]);
      leftTracker++;
    } else {
      output.push(right[rightTracker]);
      rightTracker++;
    }
  }

  while (leftTracker != left.length) {
    output.push(left[leftTracker]);
    leftTracker++;
  }

  while (rightTracker != right.length) {
    output.push(right[rightTracker]);
    rightTracker++;
  }

  return output;
};

const MergeSort = (arr) => {
  if (arr.length === 1) {
    console.log("Returning Arr: ", arr);
    return arr;
  }
  const start = 0;
  const end = arr.length;
  const mid = Math.floor((start + end) / 2);
  const arr1 = arr.slice(start, mid);
  if (arr1.length > 0) {
    console.log("Start: ", start);
    console.log("End: ", end);
    console.log("Mid: ", mid);
    console.log("Arr 1: ", arr1);
  }
  const arr2 = arr.slice(mid);

  const left = MergeSort(arr1);
  const right = MergeSort(arr2);
  const output = Merge(left, right);
  console.log("Merge operation of ", left, " and ", right, " :", output);
  return output;
};

console.log(MergeSort([3, 2, 1]));
