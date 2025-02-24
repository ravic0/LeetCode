const arr = [4, 3, 1, 5, 2];
// const arr = [3, 2, 1];

const Partition = (arr, low, high) => {
  let i = low - 1;
  const pivot = high;

  console.log("----------------------------");

  console.log("Array being considered: ", arr.slice(low, high + 1));
  console.log("Partition pivot: ", pivot);
  console.log("Partition Element: ", arr[pivot]);

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
  console.log("----------------------------");
  return i;
};

const QuickSort = (arr, i, j) => {
  if (i < j) {
    console.log("Array: ", arr);
    const pi = Partition(arr, i, j);
    console.log("After partition: ", arr, " \n PI: ", pi);
    QuickSort(arr, 0, pi - 1);
    QuickSort(arr, pi + 1, j);
  }
  return arr;
};

console.log(QuickSort(arr, 0, arr.length - 1));
