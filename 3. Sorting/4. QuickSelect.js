// const arr = [4, 3, 1, 5, 2];
// const arr = [10, 5, 2, 0, 7, 6, 4];
// const arr = [3, 2, 1];
const arr = [5, 3, 3, 2, 3, 2, 1];
const k = 4;

const Partition = (arr, low, high, k) => {
  let i = low - 1;
  const pivot = high;

  console.log("----------------------------");

  console.log("Array being considered: ", arr.slice(low, high + 1));
  console.log("Partition pivot: ", pivot);
  console.log("Partition Element: ", arr[pivot]);
  console.log("Low: ", low);
  console.log("High: ", high);

  for (let j = low; j < high; j++) {
    if (arr[j] <= arr[pivot]) {
      console.log(arr[j], " < ", arr[pivot], " Moving i to ", i + 1);
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log("Post swap: ", arr);
    }
  }

  console.log("Array before: ", arr);
  console.log("i: ", i);

  i++; // swap with i++ position
  const temp = arr[i];
  arr[i] = arr[pivot];
  arr[pivot] = temp;
  console.log("Array after: ", arr);
  console.log("Pivot element in correct place: ", i);
  console.log("----------------------------");
  return i;
};

const QuickSelect = (arr, i, j, k) => {
  console.log("I: ", i);
  console.log("J: ", j);
  if (i < j) {
    console.log("Array: ", arr);
    const pi = Partition(arr, i, j, k);
    console.log("After partition: ", arr, " \n PI: ", pi);
    console.log("K: ", k);
    if (k < pi) {
      console.log("Looking at: ", arr.slice(i, pi));
      QuickSelect(arr, i, pi - 1, k);
    } else {
      console.log("Looking at: ", arr.slice(pi + 1, j + 1));
      QuickSelect(arr, pi + 1, j, k);
    }
  }
  return arr[k];
};

console.log(QuickSelect(arr, 0, arr.length - 1, k - 1));
