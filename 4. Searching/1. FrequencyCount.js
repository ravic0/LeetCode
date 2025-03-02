const arr = [0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 10];
const keyToBeFound = 2;

const FrequencyCount = (arr, keyToBeFound) => {
  let count = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === keyToBeFound) {
      //   lowerBound = mid;
      count++;
      //   end = mid - 1;
      let range = 1;
      while (arr[mid - range] === keyToBeFound) {
        count++;
        range++;
      }
      range = 1;

      while (arr[mid + range] === keyToBeFound) {
        count++;
        range++;
      }
      break;
    } else if (arr[mid] > keyToBeFound) {
      end = mid - 1;
    } else start = mid + 1;
  }
  console.log("Lower bound: ", lowerBound);
  return count;
};

console.log(FrequencyCount(arr, keyToBeFound));
