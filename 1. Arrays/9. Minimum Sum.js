const Array1 = [23, 5, 10, 17, 30];
const Array2 = [26, 134, 135, 14, 19];

// Sort one of the arrays, say A2. Find lower bound for each element X of A1 in A2 and keep track of the minimum difference.

const setVar = (
  arr1,
  arr2,
  arr1_tracker,
  arr2_tracker,
  a1_idx,
  a2_idx,
  currentLowest
) => {
  const diff = Math.abs(arr1[arr1_tracker] - arr2[arr2_tracker]);
  if (diff < currentLowest) {
    currentLowest = diff;
    a1_idx = arr1_tracker;
    a2_idx = arr2_tracker;
  }

  return [currentLowest, a1_idx, a2_idx];
};

const sortArray = (arr) => {
  return arr.sort((a, b) => {
    if (a < b) return -1;
    else return 1;
  });
};

const minimumSumArray = (arr1, arr2) => {
  let a1_idx = -1,
    a2_idx = -1;

  let currentLowest = Number.MAX_VALUE;

  arr1 = sortArray(arr1);
  arr2 = sortArray(arr2);

  console.log("arr1", arr1);
  console.log("arr2", arr2);

  let arr1_tracker = 0,
    arr2_tracker = 0;

  for (let i = 0; i < 2 * arr1.length; i++) {
    [currentLowest, a1_idx, a2_idx] = setVar(
      arr1,
      arr2,
      arr1_tracker,
      arr2_tracker,
      a1_idx,
      a2_idx,
      currentLowest
    );

    if (arr1[arr1_tracker] < arr2[arr2_tracker]) {
      if (arr1_tracker == arr1.length - 1) {
        while (arr2_tracker < arr2.length) {
          [currentLowest, a1_idx, a2_idx] = setVar(
            arr1,
            arr2,
            arr1_tracker,
            arr2_tracker,
            a1_idx,
            a2_idx,
            currentLowest
          );
          arr2_tracker++;
        }
        break;
      } else arr1_tracker++;
    } else if (arr2_tracker == arr2.length - 1) {
      while (arr1_tracker < arr1.length) {
        [currentLowest, a1_idx, a2_idx] = setVar(
          arr1,
          arr2,
          arr1_tracker,
          arr2_tracker,
          a1_idx,
          a2_idx,
          currentLowest
        );
        arr1_tracker++;
      }
      break;
    } else arr2_tracker++;
  }

  return [arr1[a1_idx], arr2[a2_idx]];
};

console.log(minimumSumArray(Array1, Array2));
