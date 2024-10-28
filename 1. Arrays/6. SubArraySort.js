const arr = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11];
// const arr = [2, 3, 1];
// const arr = [1, 2, 3];

const setValues = (smallest, largest, val) => {
  if (smallest === undefined) smallest = val;

  if (largest === undefined) largest = val;

  if (val < smallest) smallest = val;

  if (val > largest) largest = val;

  return [smallest, largest];
};

const subArraySort = (arr) => {
  let smallest, largest;

  if (arr[0] > arr[1])
    [smallest, largest] = setValues(smallest, largest, arr[0]);

  if (arr[arr.length - 1] < arr[arr.length - 2])
    [smallest, largest] = setValues(smallest, largest, arr[arr.length - 1]);

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] || arr[i] < arr[i - 1])
      [smallest, largest] = setValues(smallest, largest, arr[i]);
  }

  if (smallest === undefined) return [-1, -1];

  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < arr.length; i++)
    if (smallest < arr[i]) {
      startIndex = i;
      break;
    }

  for (let i = arr.length - 1; i >= 0; i--)
    if (largest > arr[i]) {
      endIndex = i;
      break;
    }

  return [startIndex, endIndex];
};

console.log(subArraySort(arr));
