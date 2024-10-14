const array = [2, 3, -6, 9, 11, 1];
const expectedSum = 4;

const findIndex = (arr, el) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] == el) return i;

  return -1;
};

const pairs_old = (arr, expectedSum) => {
  const set = new Set();
  for (const i of array) set.add(i);

  for (let i = 0; i < arr.length; i++) {
    const requiredSum = expectedSum - arr[i];
    if (requiredSum !== arr[i] && set.has(requiredSum)) {
      const idx = findIndex(arr, requiredSum);
      return [i, idx];
    }
  }

  return [-1, -1];
};

//corrected - Adding one element at a time to the set to ensure same entry when added with itself does not show as a possible output to the expected sum

const pairs = (arr, expectedSum) => {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const requiredSum = expectedSum - arr[i];
    if (set.has(requiredSum)) return [i, findIndex(arr, requiredSum)];

    set.add(i);
  }
  return [-1, -1];
};

console.log(pairs(array, expectedSum));
