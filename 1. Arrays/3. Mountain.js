const array = [
  5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const checkPeak = (array, i) => {
  if (array[i - 1] < array[i] && array[i] > array[i + 1]) return true;
  return false;
};

const IsDescending = (array, i) => {
  if (array[i + 1] < array[i]) return true;
  return false;
};

const mountain = (array) => {
  let mountainLength = 0;
  let bottomStart = 0;
  for (let i = 1; i < array.length - 1; ) {
    if (checkPeak(array, i)) {
      let descendStart = 1;
      while (IsDescending(array, i) && i < array.length) {
        i++;
        descendStart++;
      }

      if (bottomStart + descendStart > mountainLength)
        mountainLength = bottomStart + descendStart;

      bottomStart = 0;
    } else {
      i++;
      bottomStart++;
    }
  }

  return mountainLength;
};

console.log(mountain(array));
