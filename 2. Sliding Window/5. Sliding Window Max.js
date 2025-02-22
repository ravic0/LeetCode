// const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const arr = [1, 2, 3, 1, 1, 1, 2, 3, 6];
const k = 3;

const MaxSlidingWindow = (arr, k) => {
  let start = 0;
  const output = [];
  const track = { idx: -1, value: Number.MIN_VALUE };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > track.value) {
      track.idx = i;
      track.value = arr[i];
    }

    if (i - start >= k - 1) {
      // time to append to output
      if (track.idx >= start && track.idx <= i) {
        output.push(track.value);
        start++;
      } else {
        track.idx = start;
        track.value = arr[start];
        output.push(track.value);
      }
    }
  }

  return output;
};

console.log(MaxSlidingWindow(arr, k));
