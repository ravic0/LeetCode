// const arr = [4, 5, 6, 7, 0, 1, 2, 3];
const arr = [7, 9, 10, 1, 2, 3, 4, 5, 6];
// const srr = [0, 1, 2, 3, 4, 5, 6, 7];
const elementToBeFound = 5;

const RotatedSearch = (arr, elementToBeFound) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log("Start: ", start);
    console.log("End: ", end);
    console.log("Mid: ", mid);
    if (arr[mid] === elementToBeFound) return mid;
    else if (
      arr[start] <= arr[mid] &&
      elementToBeFound >= arr[start] &&
      elementToBeFound <= arr[mid]
    )
      end = mid - 1; // Line 2
    else start = mid + 1; // Line 1
  }
  return -1;
};

console.log(RotatedSearch(arr, elementToBeFound));
