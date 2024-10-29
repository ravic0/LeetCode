const arr = [10, 11, 5, 4, 3, 2, 1]; // [1,2,3,4,5,10,11] -> 4
// const arr = [5, 4, 3, 2, 1]; // [1,2,3,4,5] -> 2
// const arr = [1, 2, 3, 4, 5]; // [1,2,3,4,5] -> 0

const findIndexInSortedArray = (arr, key) => {
  return arr.findIndex((obj) => obj.key === key);
};

const minimumSwaps = (arr) => {
  let minimumSwaps = 0;
  const visitedIdx = new Set();

  const posArray = arr.map((el, idx) => {
    return { key: el, idx };
  });

  const sortedPosArray = Array.from(posArray);

  sortedPosArray.sort((a, b) => {
    if (a.key < b.key) return -1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (posArray[i].key === sortedPosArray[i].key || visitedIdx.has(i))
      continue;

    let cycleLength = 0;
    let traversal = i;
    while (traversal < arr.length && !visitedIdx.has(traversal)) {
      cycleLength++;
      const actualIndex = findIndexInSortedArray(
        sortedPosArray,
        posArray[traversal].key
      );
      visitedIdx.add(traversal);
      if (posArray[actualIndex].key === sortedPosArray[actualIndex].key) break;
      else traversal = actualIndex;
    }
    minimumSwaps += cycleLength - 1;
  }

  return minimumSwaps;
};

console.log(minimumSwaps(arr));
