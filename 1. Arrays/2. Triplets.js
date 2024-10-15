const array = [1, 3, 2, 4, 5, 6, 8, 7, 15, 9];
const target = 18;

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].value === value)
      return { key: arr[mid].key, value: arr[mid].value };
    else if (arr[mid].value > value) {
      end = mid - 1;
    } else start = mid + 1;
  }

  return { key: -1, value: -1 };
};

const triplets_old = (arr, target) => {
  const trp = [];
  const op = [];

  for (let i = 0; i < arr.length; i++) {
    trp.push({ key: i, value: arr[i] });
  }

  trp.sort((a, b) => {
    if (a.value < b.value) return -1;
  });

  //   console.log(trp);

  for (let i = 0; i < trp.length - 1; i++) {
    const currentSum = target - trp[i].value - trp[i + 1].value;
    // console.log("Remaining sum: ", currentSum);
    const remainingSum = binarySearch(trp.slice(i + 2), currentSum);
    // console.log("Result: ", remainingSum);
    if (remainingSum.key >= 0) {
      console.log(
        "Adding: ",
        trp[i].value,
        ", ",
        trp[i + 1].value,
        ", ",
        remainingSum.value
      );
      op.push([i, i + 1, remainingSum.key]);
    } else continue;
  }

  return op;
};

// Corrected - Used two pointer approach

const two_pointer = (arr, sum) => {
  let start = 0;
  let end = arr.length - 1;
  //   console.log("Temp Array: ", arr);
  const pairs = [];
  while (start < end) {
    const intSum = arr[start].value + arr[end].value;
    // console.log("int sum: ", intSum);
    if (intSum === sum) {
      //   console.log("adding: ", arr[start].key, arr[end].key);
      pairs.push([arr[start].key, arr[end].key]);
      start++;
      end--;
    } else if (intSum > sum) end--;
    else start++;
  }

  return pairs;
};

const triplets = (arr, target) => {
  const op = [];
  const trp = [];

  for (let i = 0; i < arr.length; i++) {
    trp.push({ key: i, value: arr[i] });
  }

  trp.sort((a, b) => {
    if (a.value < b.value) return -1;
  });

  for (let i = 0; i < arr.length - 1; i++) {
    const remainingSum = target - trp[i].value;
    // console.log("Target: ", target);
    // console.log("remSum: ", remainingSum);

    const pairs = two_pointer(trp.slice(i + 1), remainingSum);
    if (pairs.length > 0) {
      for (const pair of pairs) {
        console.log(
          "Adding: ",
          trp[i].value,
          ", ",
          arr[pair[0]],
          ", ",
          arr[pair[1]]
        );
        op.push([trp[i].key, pair[0], pair[1]]);
      }
    }
  }

  op.sort((a, b) => {
    if (a[0] < b[0]) return -1;
  });
  return op;
};

console.log(triplets(array, target));
